export class DetailsPane {
    #container
    #nifiNode

    constructor(container) {
        this.#container = container
    }

    populateDetails(node) {
        this.#nifiNode = node
        this.#populateHeader()
        this.#populateProperties()
        this.#populateRelationships()
        this.#populateComments()
        this.#populateSettings()
    }
    #populateHeader() {
        const name = this.#container.querySelector(".details-header .nifi-name")
        name.innerText = this.#nifiNode.name[0]._text[0]

        const type = this.#container.querySelector(".details-header .nifi-processor-type")
        type.innerText = this.#nifiNode.type[0]._text[0]
            .substring(this.#nifiNode.type[0]._text[0].lastIndexOf('.') + 1)
        type.href = this.#getProcessorDocsLink(this.#nifiNode)
        type.target = "_blank"
    }
    #populateProperties() {
        const propTable = this.#container
            .querySelector(".details-body .tab-content[data-tab=\"properties\"] tbody")
        this.#clearTable(propTable)

        for (let [key, value] of this.#getProps(this.#nifiNode)) {
            const row = document.createElement("tr")
            const keyCol = document.createElement("td")
            keyCol.innerText = key
            row.appendChild(keyCol)

            const valCol = document.createElement("td")
            if (value) valCol.innerText = value
            row.appendChild(valCol)
            propTable.appendChild(row)
        }
    }
    #getProcessorDocsLink() {
        // https://nifi.apache.org/docs/nifi-docs/components/org.apache.nifi/nifi-standard-nar/1.20.0/org.apache.nifi.processors.standard.GetFile/index.html
        const baseurl = "https://nifi.apache.org/docs/nifi-docs/components"
        const bundle = this.#getBundle(this.#nifiNode)
        const type = this.#nifiNode.type[0]._text[0]
        if (bundle) {
            return `${baseurl}/${bundle?.group}/${bundle?.artifact}/${bundle?.version}/${type}`
        } else return "https://nifi.apache.org/docs/nifi-docs/"
    }
    #populateRelationships() {
        const relTable = this.#container
            .querySelector(".details-body .tab-content[data-tab=\"relationships\"] tbody")
        this.#clearTable(relTable)

        for (let rel of this.#getRelationships(this.#nifiNode)) {
            const row = document.createElement("tr")
            const nameCol = document.createElement("td")
            nameCol.innerText = rel.name
            row.appendChild(nameCol)

            const autoTerminateCol = document.createElement("td")
            if (rel.autoTerminate) autoTerminateCol.innerText = rel.autoTerminate
            row.appendChild(autoTerminateCol)
            relTable.appendChild(row)
        }
    }
    #populateComments() {
        const commentTab = this.#container
            .querySelector(".details-body .tab-content[data-tab=\"comments\"]")
        commentTab.innerText = this.#getComments(this.#nifiNode) ?? ""
    }
    #populateSettings() {
        const settingsTable = this.#container
            .querySelector(".details-body .tab-content[data-tab=\"settings\"] tbody")
        this.#clearTable(settingsTable)
        for (let [key, value] of this.#getSettings(this.#nifiNode)) {
            const row = document.createElement("tr")

            const keyCol = document.createElement("td")
            keyCol.innerText = key
            row.appendChild(keyCol)

            const valueCol = document.createElement("td")
            if (value) valueCol.innerText = value
            row.appendChild(valueCol)
            settingsTable.appendChild(row)
        }
    }
    #getBundle() {
        if (this.#nifiNode.bundle) {
            const group = this.#nifiNode.bundle[0].group[0]._text[0]
            const artifact = this.#nifiNode.bundle[0].artifact[0]._text[0]
            const version = this.#nifiNode.bundle[0].version[0]._text[0]
            return {
                group: group,
                artifact: artifact,
                version: version
            }
        } else return null
    }
    #clearTable(table) {
        while (table.childElementCount > 1) {
            table.removeChild(table.lastChild);
        }
    }
    #getProps(node) {
        return new Map(node.config[0].properties[0].entry.map(entry => {
            const key = entry.key[0]._text[0]
            const value = entry.value?.[0]?._text[0]
            return [key, value]
        }))
    }
    #getRelationships(node) {
        return node.relationships.map(r => {
            return {
                name: r.name[0]._text[0],
                autoTerminate: r.autoTerminate[0]._text[0],
                retry: r.retry?.[0]?._text?.[0]
            }
        })
    }
    #getComments(node) {
        return node.config[0].comments?.[0]?._text?.[0]
    }
    #getSettings(node) {
        const config = node.config[0]
        const bundle = this.#getBundle(node)
        const configSettings = new Map(Object.keys(config).map(ck => {
            return [ck, config[ck]?.[0]?._text?.[0]]
        }))
        return new Map([
            ['name', node.name[0]._text[0]],
            ['id', node.id[0]._text[0]],
            ['type', node.type[0]._text[0] + ' ' + bundle?.version ?? ""],
            ['bundle', `${bundle?.group} - ${bundle?.artifact}`],
            ...configSettings
        ]);
    }
}


