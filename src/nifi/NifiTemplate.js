import {js2xml, xml2js} from "xml-js";
import {Graph} from "../diagram/Graph";

export class NifiTemplate {
    static NIFI_TEMPLATE_OPTIONS = ["xmlString", "xml"]
    static XML_2_JS_OPTIONS = {
        compact: true,
        alwaysArray: true
    };

    encodingVersion = ""
    #xmlRoot
    #json
    flow

    constructor(options) {
        if (options.xmlString) {
            this.#initXmlFromString(options.xmlString)
        } else if (options.object) {
            this.#initFromObject(options.object)
        } else {
            throw `Expected NiFi template options ${NifiTemplate.NIFI_TEMPLATE_OPTIONS}. Found none.`
        }

        this.#initEncodingVersion()
        this.flow = this.#initRootFlow()
    }

    subFlow(processGroupId) {
        const processGroup = this.#json.template[0].snippet[0].processGroups?.find(pg => {
            return pg.id[0]._text[0] === processGroupId
        })
        if (!processGroup) throw `Can't find processGroup with ID ${processGroupId}`
        return this.#createFlow(processGroup.contents[0])
    }

    #initXmlFromString(xmlString) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(xmlString, "application/xml");
        const errorNode = doc.querySelector("parsererror");
        if (errorNode) {
            throw (`Failed to parse NiFi template from XML. ${errorNode}`)
        } else {
            this.#xmlRoot = doc
        }
        this.#json = xml2js(xmlString, NifiTemplate.XML_2_JS_OPTIONS)
    }

    #initFromObject(object) {
        const xmlText = js2xml(object, { compact: true })
        this.#initXmlFromString(xmlText)
    }

    #initEncodingVersion() {
        this.encodingVersion = this.#json.template[0]._attributes?.["encoding-version"]
    }

    #initRootFlow() {
        const snippet = this.#json.template[0].snippet[0]
        return this.#createFlow(snippet)
    }

    #createFlow(flowContext) {
        const nodes = []
        const connections = []

        nodes.push.apply(nodes, this.#makeNodeAll(flowContext.labels, "label"))
        nodes.push.apply(nodes, this.#makeNodeAll(flowContext.processors, "processor"))
        nodes.push.apply(nodes, this.#makeNodeAll(flowContext.processGroups, "processGroup"))
        nodes.push.apply(nodes, this.#makeNodeAll(flowContext.inputPorts, "inputPort"))
        nodes.push.apply(nodes, this.#makeNodeAll(flowContext.outputPorts, "outputPort"))
        nodes.push.apply(nodes, this.#makeNodeAll(flowContext.funnels, "funnel"))
        nodes.push.apply(nodes, this.#makeBendNodes(flowContext))

        connections.push.apply(connections, this.#makeConnectionAll(flowContext.connections))
        connections.push.apply(connections, this.#createBendConnections(flowContext))
        this.#adjustConnectionsForProcessGroups(connections, flowContext)

        const graph = new Graph()
        graph.addNodeAll(nodes)
        graph.addConnectionAll(connections)
        return graph
    }

    #adjustConnectionsForProcessGroups(connections, flowContext) {
        // Any connections going into a processGroup (only inports), redirect them to the processGroup
        if (!flowContext.processGroups) return
        const pgToPorts = new Map(flowContext.processGroups.map(pg => [
            pg.id[0]._text[0],
            (pg.contents[0].inputPorts ?? []).map(ip => {
                return {
                    id: ip.id[0]._text[0],
                    name: ip.name[0]._text[0]
                }
            }).concat(
                (pg.contents[0].outputPorts ?? []).map(ip => {
                    return {
                        id: ip.id[0]._text[0],
                        name: ip.name[0]._text[0]
                    }
                }))
        ]));

        for (const c of connections) {
            for (const [pgId, portObj] of pgToPorts.entries()) {
                if (portObj.map(p => p.id).includes(c.connection.destination)) {
                    const portName = portObj.find(p => p.id === c.connection.destination).name
                    c.connection.destinationPort = portName
                    c.connection.destination = pgId
                }
                if (portObj.map(p => p.id).includes(c.connection.source)) {
                    const portName = portObj.find(p => p.id === c.connection.source).name
                    c.connection.sourcePort = portName
                    c.connection.source = pgId
                }
            }
        }
    }

    #createBendConnections(flowContext) {
        if (!flowContext.connections) return
        const connectionsWithBends = flowContext.connections.filter(c => c.bends)
        const intraBendConnections = connectionsWithBends.flatMap(c => {
            c.connection.finalDestination = c.connection.destination
            // new connections from b0 to bN
            let newConnections = c.bends.map((b, index) => {
                b.connection = {
                    source: `${c.connection.source}${c.connection.destination}b${index}`, // Starts at #b0
                    destination: `${c.connection.source}${c.connection.destination}b${index + 1}`,
                }
                return b
            })
            // Set final bend dest
            newConnections.at(-1).connection.destination = c.connection.finalDestination
            // Set first connection to bend
            c.connection.destination = c.connection.source + c.connection.destination + "b0"
            return newConnections
        })
        return intraBendConnections
    }

    #makeBendNodes(flowContext) {
        if (!flowContext.connections) return
        return flowContext.connections
            .flatMap(c => {
                return (c.bends ?? []).map((b, index) => {
                    const connection = this.#makeConnection(c).connection
                    const sourceId = connection.source
                    const destId = connection.destination
                    b.node = {
                        id: sourceId + destId + 'b' + index,
                        pos: {
                            x: parseFloat(b.x[0]._text[0]),
                            y: parseFloat(b.y[0]._text[0]),
                        },
                        type: "bend"
                    }

                    return b
                })
            })
    }

    #makeNode(object, type) {
        let pos
        if (object.position) {
            pos = {
                x: parseFloat(object.position[0].x[0]._text[0]),
                y: parseFloat(object.position[0].y[0]._text[0]),
            }
        }

        let id
        if (object.id?.[0]) {
            id = object.id[0]._text[0]
        }

        if (pos && id) {
            object.node = {
                pos: pos,
                id: id
            }
        }

        if (type) {
            object.node.type = type
        } else {
            object.node.type = "node"
        }

        return object
    }

    #makeNodeAll(array, type) {
        if (!array) return []
        return [...array.map((o) => this.#makeNode(o, type))]
    }

    #makeConnection(object) {
        let source
        let destination
        if (object.source) {
            source = object.source[0].id[0]._text[0]
        }
        if (object.destination) {
            destination = object.destination[0].id[0]._text[0]
        }
        if (source && destination) {
            object.connection = {
                source: source,
                destination: destination
            }
        }
        return object
    }

    #makeConnectionAll(array) {
        if (!array) return []
        return [...array.map((o) => {
            return this.#makeConnection(o)
        })]
    }
}