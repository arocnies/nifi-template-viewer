// // Working example of drawing a graph.
// function createTemplateDiagram1(templateStr, diagramDivId) {
//     const container = document.getElementById(diagramDivId);
//     const diagram = new Diagram(container)
//     const node1 = diagram.createNode()
//     const node2 = diagram.createNode()
//     diagram.connectNodes(node1, node2)
//     diagram.connectNodes(node1, node2)
//     diagram.connectNodes(node1, node2)
// }
//
// function createTemplateDiagram(templateStr, diagramDivId) {
//     const parser = new DOMParser();
//     const xml = parser.parseFromString(templateStr, 'application/xml');
//     const template = new Template(xml)
//     const jsonResult = JSON.stringify(template, null, 2);
//     // console.log(jsonResult);
//     console.log(template.bounds)
// }
//
// class Template {
//     processGroups = []
//     constructor(xml) {
//         this.processGroups = Array.from(xml.getElementsByTagName('processGroups')).map(pg => {
//             return new ProcessGroup(pg)
//         });
//     }
//
//     get bounds() {
//         const x = this.processGroups
//             .flatMap(pg => { return pg.processors })
//             .map(p => { return p.position.x })
//         const y = this.processGroups
//             .flatMap(pg => { return pg.processors })
//             .map(p => { return p.position.y })
//         return {
//             minX: Math.min(...x),
//             maxX: Math.max(...x),
//             miny: Math.min(...y),
//             maxy: Math.max(...y),
//         }
//     }
// }
//
// class ProcessGroup {
//     id;
//     name;
//     comments;
//     processors = []
//     connections = []
//     constructor(xmlNode) {
//         this.id = xmlNode.querySelector(':scope > id').textContent;
//         this.name = xmlNode.querySelector(':scope > name').textContent;
//         this.comments = xmlNode.querySelector(':scope > comments').textContent;
//         this.processors = Array.from(xmlNode.getElementsByTagName('processors')).map(p => {
//             return new Processor(p)
//         });
//         this.connections = Array.from(xmlNode.getElementsByTagName('connections')).map(c => {
//             return new Connection(c)
//         });
//     }
// }
// class Processor {
//     id;
//     parentGroupId;
//     name;
//     type;
//     state;
//     position = {}
//     config = {}
//     relationships = []
//     constructor(xmlNode) {
//         this.id = xmlNode.querySelector(':scope > id').textContent;
//         this.parentGroupId = xmlNode.querySelector(':scope > parentGroupId').textContent;
//         this.name = xmlNode.querySelector(':scope > name').textContent;
//         this.type = xmlNode.querySelector(':scope > type').textContent;
//         this.state = xmlNode.querySelector(':scope > state').textContent;
//         this.position = {
//             x: parseFloat(xmlNode.querySelector(':scope > position > x').textContent),
//             y: parseFloat(xmlNode.querySelector(':scope > position > y').textContent)
//         };
//         this.config = {}
//         this.relationships = Array.from(xmlNode.getElementsByTagName('relationships')).map(r => {
//             return {
//                 autoTerminate: r.querySelector(':scope > autoTerminate').textContent,
//                 name: r.querySelector(':scope > name').textContent
//             }
//         });
//     }
// }
//
// class Connection {
//     sourceId;
//     sourceGroupId;
//     destinationId;
//     destinationGroupId;
//     constructor(xmlNode) {
//         this.sourceId = xmlNode.querySelector(':scope > source > id').textContent;
//         this.sourceGroupId = xmlNode.querySelector(':scope > source > groupId').textContent;
//         this.destinationId = xmlNode.querySelector(':scope > destination > id').textContent;
//         this.destinationGroupId = xmlNode.querySelector(':scope > destination > groupId').textContent;
//     }
// }
//
// // ---
//
// class Diagram {
//     #container;
//     #instance;
//     #nodeCount = 0
//     #connectionsCount = 0
//     constructor(container) {
//         this.#container = container
//         this.#instance = jsPlumbBrowserUI.newInstance({container:container, connector:"StateMachine", endpoint:{type:"Dot", options:{radius:3}}, anchor:"Center"});
//     }
//
//     /**
//      * Creates a new default node and adds it to the Graph.
//      * @returns {HTMLDivElement}
//      */
//     createNode() {
//         const node = document.createElement("div")
//         node.className = "node"
//         node.innerText = "Node " + this.#nodeCount
//         node.style.border = "solid"
//         node.style.padding = "10px"
//         node.style.position = "absolute"
//         this.#container.appendChild(node)
//         this.#instance.addEndpoint(node, { endpoint:'Blank' })
//         node.style.left = (node.offsetWidth * this.#nodeCount) % this.#container.offsetWidth
//         node.style.top = (node.offsetHeight * this.#nodeCount) % this.#container.offsetHeight
//         this.#nodeCount++
//         return node
//     }
//
//     connectNodes(node1, node2) {
//         this.#instance.connect({
//             source:node1,
//             target:node2,
//             connector:"Straight",
//             anchor:"Continuous",
//             overlays:[
//                 { type:"Label", options:{label:"Connection " + this.#connectionsCount, location:0.5}},
//                 { type:"Arrow", options:{location:1}}
//             ]
//         })
//         this.#connectionsCount++
//     }
// }