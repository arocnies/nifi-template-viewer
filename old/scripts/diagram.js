let sizing_1_3 = {
    processor: {width: 352, height: 128},
    port: {width: 240, height: 80},
    funnel: {width: 48, height: 48},
    bend: {width: 10, height: 10},
    scaler: {width: 1, height: 1}
}
let sizing_no_encoding = {
    processor: {width: 224, height: 92},
    port: {width: 168, height: 56},
    funnel: {width: 32, height: 32},
    bend: {width: 7, height: 7},
    scaler: {width: 1, height: 1}
}

let sizing = null

function createNiFiDiagram(diagramWrapper, templateStr) {
    if (!diagramWrapper) throw (`Need existing element to create diagram. Found: ${diagramWrapper}`)
    let diagram = null
    const parser = new DOMParser();
    const doc = parser.parseFromString(templateStr, "application/xml");
    const errorNode = doc.querySelector("parsererror");
    if (errorNode) {
        throw (`Failed to parse NiFi template.`)
    } else {
        const encodingVersion = doc.querySelector("template").getAttribute("encoding-version")
        console.log(`Encoding Version ${encodingVersion}`)
        if (!encodingVersion) {
            sizing = sizing_no_encoding
        } else {
            sizing = sizing_1_3
        }
        const snippetNode = doc.querySelector("snippet");
        const snippet = createSnippet(snippetNode)
        diagram = createDiagram(diagramWrapper, snippet)
    }

    return diagram
}

function createDiagram(diagramDiv, snippet) {
    if (!diagramDiv) throw (`Need existing element to create diagram. Found: ${diagramDiv}`)

    const bounds = getPositionBounds(snippet)
    const container = createContainerDiv(
        diagramDiv,
        `${bounds.deltaX + sizing.processor.width}px`,
        `${bounds.deltaY + sizing.processor.height}px`)
    const instance = initJsPlumbInstance(container)

    for (let processor of snippet.processors) {
        const procDiv = createProcessorDiv(processor)
        container.appendChild(procDiv)
        instance.addEndpoint(procDiv, {endpoint: 'Blank'})
        positionNode(processor, procDiv, snippet)
    }
    for (let funnel of snippet.funnels) {
        const funnelDiv = createFunnelDiv(funnel)
        container.appendChild(funnelDiv)
        instance.addEndpoint(funnelDiv, {endpoint: 'Blank'})
        positionNode(funnel, funnelDiv, snippet)
    }
    for (let port of snippet.inputPorts.concat(snippet.outputPorts)) {
        const portDiv = createPortDiv(port)
        container.appendChild(portDiv)
        instance.addEndpoint(portDiv, {endpoint: 'Blank'})
        positionNode(port, portDiv, snippet)
    }
    for (let connection of snippet.connections) {
        const source = container.querySelector(`[data-nid='${connection.source.id}']`)
        if (!source) throw (`Could not located source of ID "${connection.source.id}"`)
        const dest = container.querySelector(`[data-nid='${connection.destination.id}']`)
        if (!dest) throw (`Could not located destination of ID "${connection.destination.id}"`)
        connectProcessors(instance, connection, source, dest, snippet, container)
    }
    addZooming(container, instance)
    return container
}

function createContainerDiv(diagramDiv, width, height) {
    const div = document.createElement("div")
    div.className += "diagram"
    div.style.position = "relative" // Required

    // Styling
    div.style.width = width
    div.style.height = height
    div.style.margin = "60px"

    diagramDiv.insertBefore(div, diagramDiv.firstChild)
    return div
}

function initJsPlumbInstance(container) {
    return jsPlumbBrowserUI.newInstance({
        container: container,
        connector: {
            type: "Straight",
            options: {
                proximityLimit: 200,
                curviness: 20,
            }
        },
        endpoint: {type: "Blank", options: {radius: 3}},
        anchor: { type:"Perimeter", options:{ shape:"Rectangle" } },
        connectionsDetachable: false
    });
}

function createProcessorDiv(processor) {
    const div = document.createElement("div")
    div.className = "processor"

    const titleDiv = document.createElement("div")
    titleDiv.innerHTML = `<b>${processor.name}</b><br>
                        <small>${processor.type.substring(processor.type.lastIndexOf('.') + 1)}</small>`
    div.appendChild(titleDiv)

    div.style.position = "absolute" // Required
    div.dataset.nid = processor.id
    div.style.width = `${sizing.processor.width * sizing.scaler.width}px`
    div.style.height = `${sizing.processor.height * sizing.scaler.height}px`
    div.onclick = () => {
        window.dispatchEvent(new CustomEvent("nifi:select", { detail: processor }))
    }

    // Styling
    div.style.outline = "solid"
    div.style.padding = "2px"
    div.style.textAlign = "center"
    div.style.background = "inherit"
    div.style.borderRadius = "3px"
    div.style.cursor = "pointer"
    div.style.background = "var(--color-canvas-subtle)"

    const table = createProcessorTableDiv(processor)
    const tableWrapper = document.createElement("div")
    tableWrapper.appendChild(table)
    tableWrapper.style.height = "65%"
    tableWrapper.style.overflow = "auto"
    //div.appendChild(tableWrapper)

    return div
}

function createProcessorTableDiv(processor) {
    const table = document.createElement("table")
    for (let property of processor.properties.filter(p => p.value != null)) {
        const row = document.createElement("tr")

        const key = document.createElement("td")
        key.innerHTML = `<small>${property.key}</small>`
        row.appendChild(key)

        const value = document.createElement("td")
        value.innerHTML = `<small>${property.value}</small>`
        row.appendChild(value)
        table.appendChild(row)
    }
    return table
}

function createFunnelDiv(funnel) {
    const div = document.createElement("div")
    div.className = "funnel"
    div.innerText = "Funnel"

    div.style.position = "absolute" // Required
    div.dataset.nid = funnel.id
    div.style.width = `${sizing.funnel.width * sizing.scaler.width}px`
    div.style.height = `${sizing.funnel.height * sizing.scaler.height}px`

    // Styling
    div.style.outline = "solid"
    div.style.padding = "2px"
    div.style.textAlign = "center"
    div.style.justifyContent = "center"
    div.style.background = "inherit"
    div.style.borderRadius = "3px"
    div.style.cursor = "pointer"
    div.style.background = "var(--color-canvas-subtle)"

    return div
}

function createPortDiv(port) {
    const div = document.createElement("div")
    div.className = "port"
    div.innerHTML = `<b>${port.name}</b>`

    div.style.position = "absolute" // Required
    div.dataset.nid = port.id
    div.style.width = `${sizing.port.width * sizing.scaler.width}px`
    div.style.height = `${sizing.port.height * sizing.scaler.height}px`
    div.onclick = () => {
        window.dispatchEvent(new CustomEvent("nifi:select", { detail: processor }))
    }

    // Styling
    div.style.outline = "solid"
    div.style.padding = "2px"
    div.style.textAlign = "center"
    div.style.justifyContent = "center"
    div.style.background = "inherit"
    div.style.borderRadius = "3px"
    div.style.cursor = "pointer"
    div.style.background = "var(--color-canvas-subtle)"

    return div
}

function createBendDiv() {
    const div = document.createElement("div")
    div.className = "bend"

    div.style.position = "absolute" // Required
    div.style.width = `${sizing.bend.width * sizing.scaler.width}px`
    div.style.height = `${sizing.bend.height * sizing.scaler.height}px`

    // Styling
    div.style.outline = "solid"
    div.style.padding = "2px"
    div.style.textAlign = "center"
    div.style.justifyContent = "center"
    div.style.background = "inherit"
    div.style.borderRadius = "50%"
    div.style.cursor = "pointer"

    return div
}


function positionNode(node, div, snippet) {
    const pos = getPositionBounds(snippet)
    div.style.left = `${(node.x - pos.minX) * sizing.scaler.width}px`
    div.style.top = `${(node.y - pos.minY) * sizing.scaler.height}px`
}

function getPositionBounds(snippet) {
    const maxX = snippet.bounds.maxX
    const maxY = snippet.bounds.maxY
    const minX = snippet.bounds.minX
    const minY = snippet.bounds.minY
    const deltaX = maxX - minX
    const deltaY = maxY - minY
    return {
        maxX: maxX,
        maxY: maxY,
        minX: minX,
        minY: minY,
        deltaX: deltaX,
        deltaY: deltaY,
    }
}

function connectProcessors(instance, connection, source, dest, snippet, container) {
    if (source === null || dest === null) console.error("Cannot connect null/undef divs")
    const bendDivs = connection.bends.map(bend => {
        const bendDiv = createBendDiv()
        container.appendChild(bendDiv)
        positionNode(bend, bendDiv, snippet)
        return bendDiv
    })

    const nodes = [...bendDivs, dest]
    instance.connect({
        source: source,
        target: nodes[0],
        overlays: [
            {type: "Label", options: {label: `${connection.selectedRelationships}`, location: 0.5}},
            {type: "Arrow", options: {location: 1}}
        ],
    })
    nodes.forEach((n, index) => {
        const next = nodes[index + 1]
        if (next) {
            instance.connect({
                source: n,
                target: next,
                overlays: [
                    {type: "Label", options: {label: `${connection.selectedRelationships}`, location: 0.5}},
                    {type: "Arrow", options: {location: 1}}
                ],
            })
        }
    })
}

// --- Zooming ---

let zoomLevel = 1.0;

function addZooming(container, instance) {
    container.parentElement.addEventListener('wheel', (event) => {
        event.preventDefault(); // prevent normal scrolling behavior
        zoomLevel += event.deltaY > 0 ? -0.01 : 0.01; // adjust zoom level based on scroll direction
        if (zoomLevel > 2) zoomLevel = 2.0
        if (zoomLevel < 0.2) zoomLevel = 0.2
        container.style.transform = `scale(${zoomLevel})`;
        instance.setZoom(zoomLevel)
    });
}
