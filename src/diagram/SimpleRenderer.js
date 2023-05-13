export class SimpleRenderer {
    #container

    constructor(container) {
        this.#container = container
    }
    setGraph(graph) {
        // noop
    }
    clearRender() {
        while (this.#container.firstChild) {
            this.#container.removeChild(this.#container.firstChild);
        }
    }
    setZoom(zoomLevel) {
        // Noop
    }
    renderNode(node) {
        const div = document.createElement("div")
        div.className = "node"
        div.innerText = "NODE"
        div.style.border = "solid"
        div.style.width = "auto"
        return div
    }

    renderConnection(connection, node1, node2) {
        const element1 = node1.div
        const element2 = node2.div

        const canvas = document.createElement("canvas")
        // Get the positions of the elements relative to their parent
        const element1Pos = {
            x: element1.offsetLeft + element1.offsetWidth / 2,
            y: element1.offsetTop + element1.offsetHeight / 2
        };
        const element2Pos = {
            x: element2.offsetLeft + element2.offsetWidth / 2,
            y: element2.offsetTop + element2.offsetHeight / 2
        };

        // Set up the canvas width / height
        const ctx = canvas.getContext('2d');
        const canvasWidth = Math.max(element1Pos.x, element2Pos.x);
        const canvasHeight = Math.max(element1Pos.y, element2Pos.y);
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        canvas.style.position = "absolute"
        canvas.style.left = "0px"
        canvas.style.top = "0px"

        // Draw a line between the center points of the elements
        ctx.beginPath();
        ctx.moveTo(element1Pos.x, element1Pos.y);
        ctx.lineTo(element2Pos.x, element2Pos.y);
        ctx.stroke();

        return canvas
    }
}
