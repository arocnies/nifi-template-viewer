import {SimpleRenderer} from "./SimpleRenderer";

export class Diagram {
    container
    #renderer

    diagramDiv = document.createElement("div")

    #zoomDiv = document.createElement("div")
    #zoomLevel = 1.0
    #maxZoom = 2.0
    #minZoom = 0.2

    #panDiv = document.createElement("div")

    constructor(container, options) {
        this.container = container
        this.#initZoomingDiv()
        this.#initDiagramDiv()
        this.#installPanning()
        this.container.appendChild(this.#panDiv)
        this.#panDiv.appendChild(this.#zoomDiv)
        this.#zoomDiv.appendChild(this.diagramDiv)

        if (options?.renderer) {
            this.#renderer = options.renderer
        } else {
            this.#renderer = new SimpleRenderer(this.diagramDiv)
        }
    }

    renderer(newRenderer) {
        this.#renderer.clearRender()
        this.#renderer = newRenderer
    }

    #initDiagramDiv() {
        const dd = this.diagramDiv
        dd.className = "diagram"
        dd.style.position = "relative"
        dd.style.width = "100%"
        dd.style.height = "100%"
    }

    resetZoom() {
        this.#zoomDiv.style.transform = `scale(${this.#zoomLevel})`
        this.#renderer.setZoom(this.#zoomLevel)
    }
    resetPan(x = 0, y = 0) {
        const width = this.diagramDiv.offsetWidth
        const height = this.diagramDiv.offsetHeight
        this.diagramDiv.style.left = `${(width/2)-x}px`;
        this.diagramDiv.style.top = `${(height/2)-y}px`;
    }

    #initZoomingDiv() {
        const zoomDiv = this.#zoomDiv
        zoomDiv.className = "diagram-zoom"
        zoomDiv.style.height = "100%"
        zoomDiv.style.width = "100%"

        this.container.addEventListener('wheel', (event) => {
            event.preventDefault(); // prevent normal scrolling behavior
            this.#zoomLevel += event.deltaY > 0 ? -0.01 : 0.01; // adjust zoom level based on scroll direction

            if (this.#zoomLevel > this.#maxZoom) this.#zoomLevel = this.#maxZoom
            if (this.#zoomLevel < this.#minZoom) this.#zoomLevel = this.#minZoom

            this.#zoomDiv.style.transform = `scale(${this.#zoomLevel})`
            this.#renderer.setZoom(this.#zoomLevel)
        });
    }

    #installPanning() {
        const panDiv = this.#panDiv
        panDiv.style.overflow = "hidden"
        panDiv.style.position = "relative"
        panDiv.className = "diagram-pan"
        panDiv.style.height = "100%"
        let pos = {top: 0, left: 0, x: 0, y: 0};

        const diagramDiv = this.diagramDiv
        diagramDiv.style.left = "0px"
        diagramDiv.style.top = "0px"

        let zoomLevel = () => this.#zoomLevel

        const mouseDownHandler = function (e) {
            e.preventDefault()
            // Change the cursor and prevent user from selecting the text
            panDiv.style.cursor = 'grabbing';
            panDiv.style.userSelect = 'none';

            const divLeft = parseInt(diagramDiv.style.left.substring(0, diagramDiv.style.left.indexOf('p')))
            const divTop = parseInt(diagramDiv.style.top.substring(0, diagramDiv.style.top.indexOf('p')))

            pos = {
                // The current scroll
                left: divLeft,
                top: divTop,
                // Get the current mouse position
                x: e.clientX,
                y: e.clientY,
            }
            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);
        };
        const mouseMoveHandler = function (e) {
            // How far the mouse has been moved
            const dx = (e.clientX - pos.x) / zoomLevel();
            const dy = (e.clientY - pos.y) / zoomLevel();
            // Scroll the element
            diagramDiv.style.left = `${pos.left + dx}px`;
            diagramDiv.style.top = `${pos.top + dy}px`;
        };
        const mouseUpHandler = function () {
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
            panDiv.style.cursor = 'grab';
            panDiv.style.removeProperty('user-select');
        };

        panDiv.addEventListener('mousedown', mouseDownHandler)
        panDiv.style.cursor = "grab"
    }

    showGraph(graph) {
        this.#renderer.clearRender()
        graph.nodes.forEach(n => delete n.node.div)
        graph.connections.forEach(n => delete n.connection.div)
        this.#renderer.setGraph(graph)
        this.#renderNodes(graph)
        this.#renderConnections(graph)
        const midX = graph.nodes
            .flatMap(n => n.node.pos.x)
            .reduce((acc, cur) => acc + cur, 0) / graph.nodes.length
        const midY = graph.nodes
            .flatMap(n => n.node.pos.y)
            .reduce((acc, cur) => acc + cur, 0) / graph.nodes.length
        this.resetPan(midX, midY)
        this.resetZoom()
    }
    #renderNodes(graph) {
        graph.nodes.forEach(n => {
            const div = this.#renderer.renderNode(n)
            div.id = n.node.id
            div.style.position = "absolute"
            div.style.left = `${n.node.pos.x}px`
            div.style.top = `${n.node.pos.y}px`
            n.div = div
            this.diagramDiv.appendChild(div)
        })
    }
    #renderConnections(graph) {
        graph.connections.forEach(c => {
            const node1 = graph.nodes.find(n => n.node.id === c.connection.source)
            const node2 = graph.nodes.find(n => n.node.id === c.connection.destination)

            const div = this.#renderer.renderConnection(c, node1, node2)
            if (div) {
                div.id = c.source + "_to_" + c.destination
                this.diagramDiv.appendChild(div)
            }
        })
    }
}
