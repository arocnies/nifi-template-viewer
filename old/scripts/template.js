// ---- Utils for working with XML ----

function select(xml, tag) {
    return xml.querySelector(':scope > ' + tag).textContent
}
function selectOrNull(xml, tag) {
    return xml.querySelector(':scope > ' + tag)?.textContent ?? null
}
function selectAll(xml, tag) {
    return [...xml.querySelectorAll(':scope > ' + tag)]
}

function createProcessor(xml) {
    const xmlRootTag = "processors"
    if (!xml || xml.tagName !== xmlRootTag)
    console.error(`Bad XML. Expected '${xmlRootTag}' but found '${xml.tagName}'`)
    return {
        id: select(xml, "id"),
        name: select(xml, "name"),
        parentGroupId: select(xml, "parentGroupId"),
        type: select(xml, "type"),
        state: select(xml, "state"),
        x: parseFloat(select(xml, "position > x")),
        y: parseFloat(select(xml, "position > y")),
        relationships: selectAll(xml, "relationships").map(r => {
            return {
                name: select(r, "name"),
                autoTerminate: select(r, "autoTerminate"),
            }
        }),
        // config: select(xml, "config"),
        properties: [...xml.querySelectorAll(":scope > config > properties > entry")]
            .map(entry => {
                return {
                    key: select(entry, "key"),
                    value: selectOrNull(entry, "value")
                }
            })
    }
}

function createConnection(xml) {
    const xmlRootTag = "connections"
    if (!xml || xml.tagName !== xmlRootTag)
        console.error(`Bad XML. Expected '${xmlRootTag}' but found '${xml.tagName}'`)
    return {
        id: select(xml, "id"),
        name: select(xml, "name"),
        parentGroupId: select(xml, "parentGroupId"),
        selectedRelationships: selectOrNull(xml, "selectedRelationships"),
        source: selectAll(xml, "source").map(r => {
            return {
                id: select(r, "id"),
                groupId: select(r, "groupId"),
                type: select(r, "type"),
            }
        })[0],
        destination: selectAll(xml, "destination").map(r => {
            return {
                id: select(r, "id"),
                groupId: select(r, "groupId"),
                type: select(r, "type"),
            }
        })[0],
        bends: selectAll(xml, "bends").map(b => {
            return {
                x: parseFloat(select(b, "x")),
                y: parseFloat(select(b, "y")),
            }
        }),
    }
}

function createFunnel(xml) {
    const xmlRootTag = "funnels"
    if (!xml || xml.tagName !== xmlRootTag)
        console.error(`Bad XML. Expected '${xmlRootTag}' but found '${xml.tagName}'`)
    return {
        id: select(xml, "id"),
        parentGroupId: select(xml, "parentGroupId"),
        x: parseFloat(select(xml, "position > x")),
        y: parseFloat(select(xml, "position > y")),
    }
}

function createInputPort(xml) {
    const xmlRootTag = "inputPorts"
    if (!xml || xml.tagName !== xmlRootTag)
        console.error(`Bad XML. Expected '${xmlRootTag}' but found '${xml.tagName}'`)
    return {
        id: select(xml, "id"),
        name: select(xml, "name"),
        parentGroupId: select(xml, "parentGroupId"),
        x: parseFloat(select(xml, "position > x")),
        y: parseFloat(select(xml, "position > y")),
    }
}
function createOutputPort(xml) {
    const xmlRootTag = "outputPorts"
    if (!xml || xml.tagName !== xmlRootTag)
        console.error(`Bad XML. Expected '${xmlRootTag}' but found '${xml.tagName}'`)
    return {
        id: select(xml, "id"),
        name: select(xml, "name"),
        parentGroupId: select(xml, "parentGroupId"),
        x: parseFloat(select(xml, "position > x")),
        y: parseFloat(select(xml, "position > y")),
    }
}

function createSnippet(xml) {
    const xmlRootTag = "snippet"
    if (!xml || xml.tagName !== xmlRootTag)
        console.error(`Bad XML. Expected '${xmlRootTag}' but found '${xml.tagName}'`)
    return {
        bounds: {
            minX: Math.min(...[...xml.querySelectorAll("x")].map(n => { return parseFloat(n.textContent) })),
            maxX: Math.max(...[...xml.querySelectorAll("x")].map(n => { return parseFloat(n.textContent) })),
            minY: Math.min(...[...xml.querySelectorAll("y")].map(n => { return parseFloat(n.textContent) })),
            maxY: Math.max(...[...xml.querySelectorAll("y")].map(n => { return parseFloat(n.textContent) })),

        },
        processors: selectAll(xml, "processors").map(p => {
            return createProcessor(p)
        }),
        connections: selectAll(xml, "connections").map(p => {
            return createConnection(p)
        }),
        funnels: selectAll(xml, "funnels").map(f => {
            return createFunnel(f)
        }),
        inputPorts: selectAll(xml, "inputPorts").map(ip => {
            return createInputPort(ip)
        }),
        outputPorts: selectAll(xml, "outputPorts").map(op => {
            return createOutputPort(op)
        }),
    }
}

