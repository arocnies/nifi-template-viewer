export class Graph {
    #nodes = []
    #connections = []
    #subGraphs = []

    get nodes() {
        return this.#nodes
    }

    addNode(object) {
        if (!object?.node?.id || !object?.node?.pos) return 0
        else {
            return this.#nodes.push(object)
        }
    }

    addNodeAll(array) {
        array.forEach(o => this.addNode(o))
    }

    get connections() {
        return this.#connections
    }

    addConnection(object) {
        if (!object?.connection?.source || !object?.connection?.destination) return 0
        else {
            return this.#connections.push(object)
        }
    }

    addConnectionAll(array) {
        array.forEach(o => this.addConnection(o))
    }

    get subgraphs() {
        return this.#subGraphs
    }

    addSubgraph(graph) {
        this.#subGraphs.push(graph)
    }

    addSubgraphAll(array) {
        array.forEach(g => this.addSubgraph(g))
    }
}