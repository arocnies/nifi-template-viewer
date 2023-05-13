import {newInstance} from "@jsplumb/browser-ui"

export class NifiRenderer {
    #docs = {
        version: "1.20.0",
        baseurl: "https://nifi.apache.org/docs/nifi-docs/components"
    }
    #container
    #instance
    sizing = SIZING_NO_ENCODING
    #sizing
    #graph

    constructor(container) {
        this.#container = container
    }
    setGraph(graph) {
        this.#graph = graph
    }
    clearRender() {
        this.#instance?.destroy()
        this.#instance = this.#newJsPlumb()
    }
    setZoom(zoomLevel) {
        this.#instance.setZoom(zoomLevel)
    }
    renderNode(node) {
        const div = document.createElement("div")
        div.classList.add("node", "nifi-node", `nifi-${node.node.type}`)

        this.#styleNodeSize(node, div)
        this.#styleNode(node, div)

        this.#instance.addEndpoint(div)
        return div
    }
    renderConnection(connection, node1, node2) {
        const element1 = node1.div
        const element2 = node2.div

        let overlays = this.#getConnectionOverlays(connection)

        this.#instance.connect({
            source: element1,
            target: element2,
            overlays: overlays
        })
    }
    setSizing(sizing) {
        this.#sizing = sizing
        this.#container.style.setProperty("--nifi-name-padding", sizing.cssProperties.namePadding)
        this.#container.style.setProperty("--nifi-name-font-size", sizing.cssProperties.nameFontSize)
        this.#container.style.setProperty("--nifi-proc-type-size", sizing.cssProperties.procTypeSize)
    }
    #newJsPlumb() {
        return newInstance({
            container: this.#container,
            connector: {
                type: "Straight"
            },
            endpoint: {type: "Blank", options: {radius: 3}},
            anchor: {type: "Perimeter", options: {shape: "Rectangle"}},
            connectionsDetachable: false
        })
    }
    #styleNodeSize(node, div) {
        let size
        if (node.node.type === "label") {
            size = {
                width: parseInt(node.width[0]._text[0]) + 6,
                height: parseInt(node.height[0]._text[0]) + 6
            }
        } else {
            size = this.#sizing[node.node.type]
        }
        div.style.width = `${size.width}px`
        div.style.height = `${size.height}px`
    }
    #styleNode(node, div) {
        switch (node.node.type) {
            case "processor": this.#styleProcessorDiv(node, div); break;
            case "funnel": this.#styleFunnelDiv(node, div); break;
            case "label": this.#styleLabelDiv(node, div); break;
            case "processGroup": this.#styleProcessGroupDiv(node, div); break;
            case "inputPort":
            case "outputPort":
                this.#stylePortDiv(node, div); break;
        }
        div.tabIndex = -1
        div.onclick = () => {
            const nodeClickEvent = new CustomEvent(
                "nifi-click-" + node.node.type,
                {detail: node, bubbles: true}
            )
            div.dispatchEvent(nodeClickEvent)
        }
        div.ondblclick = () => {
            const nodeDoubleClickEvent = new CustomEvent(
                "nifi-dblclick-" + node.node.type,
                {detail: node, bubbles: true}
            )
            div.dispatchEvent(nodeDoubleClickEvent)
        }
    }
    #styleProcessorDiv(node, div) {
        const name = document.createElement("div")
        name.classList.add("nifi-name")
        name.innerText = node.name[0]._text[0]
        div.appendChild(name)

        const type = document.createElement("a")
        type.classList.add("nifi-processor-type")
        type.innerText = node.type[0]._text[0]
            .substring(node.type[0]._text[0].lastIndexOf('.') + 1)
        type.href = this.#getProcessorDocsLink(node)
        type.target = "_blank"
        div.appendChild(type)
    }
    #styleFunnelDiv(node, div) {
        div.innerText = "funnel"
    }
    #styleLabelDiv(node, div) {
        div.innerText = node.label[0]._text[0]
        node.style[0].entry.forEach(entry => {
            const key = entry.key[0]._text[0]
            const value = entry.value[0]._text[0]
            div.style[key] = value
        })
    }
    #styleProcessGroupDiv(node, div) {
        const name = document.createElement("div")
        name.classList.add("nifi-name")
        name.innerText = node.name[0]._text[0]
        div.appendChild(name)
    }
    #stylePortDiv(node, div) {
        const name = document.createElement("div")
        name.classList.add("nifi-name")
        name.innerText = node.name[0]._text[0]
        div.innerText = node.node.type
        div.appendChild(name)
    }
    #getConnectionOverlays(connection) {
        const labelCssClass = "nifi-relationship"
        let overlays = [
            {type: "Arrow", options: {location: 1}}
        ]

        if (connection.selectedRelationships) {
            const relationships = connection.selectedRelationships.map(r => r._text[0]).join(",")
            overlays.push({
                type: "Label", options: {
                    label: relationships,
                    location: 0.5,
                    cssClass: labelCssClass
                }
            })
        }
        if (connection.connection.sourcePort) {
            overlays.push({
                type: "Label", options: {
                    label: connection.connection.sourcePort,
                    location: 0.3,
                    cssClass: labelCssClass
                }
            })
        }
        if (connection.connection.destinationPort) {
            overlays.push({
                type: "Label", options: {
                    label: connection.connection.destinationPort,
                    location: 0.7,
                    cssClass: labelCssClass
                }
            })
        }
        return overlays
    }
    #getProcessorDocsLink(node) {
        // https://nifi.apache.org/docs/nifi-docs/components/org.apache.nifi/nifi-standard-nar/1.20.0/org.apache.nifi.processors.standard.GetFile/index.html
        const type = node.type[0]._text[0]
        if (node.bundle) {
            const group = node.bundle[0].group[0]._text[0]
            const artifact = node.bundle[0].artifact[0]._text[0]
            const version = node.bundle[0].version[0]._text[0]
            return `${this.#docs.baseurl}/${group}/${artifact}/${version}/${type}`
        } else {
            return "https://nifi.apache.org/docs/nifi-docs/"
        }
    }
}

export const SIZING_1_3 = {
    processor: {width: 352, height: 128},
    inputPort: {width: 240, height: 80},
    outputPort: {width: 240, height: 80},
    funnel: {width: 48, height: 48},
    bend: {width: 10, height: 10},
    processGroup: {width: 384, height: 176},
    label: {width: 352, height: 176},
    queue: {width: 224, height: 41},
    cssProperties: {
        namePadding: "10px",
        nameFontSize: "24px",
        procTypeSize: "16px",
    }
}
export const SIZING_NO_ENCODING = {
    processor: {width: 224, height: 92},
    inputPort: {width: 168, height: 56},
    outputPort: {width: 168, height: 56},
    funnel: {width: 32, height: 32},
    bend: {width: 7, height: 7},
    processGroup: {width: 244, height: 128},
    label: {width: 244, height: 128},
    queue: {width: 155, height: 29},
    cssProperties: {
        namePadding: "2px",
        nameFontSize: "20px",
        procTypeSize: "16px",
    }
}