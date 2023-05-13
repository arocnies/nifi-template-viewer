export class BreadcrumbPane {
    #container
    #items = []
    constructor(container) {
        this.#container = container
    }
    getPathTexts() {
        return [...this.#items.map(item => item.text)]
    }
    getPathIds() {
        return [...this.#items.map(item => item.id)]
    }
    pushCrumb(text, id, onClick = () => {}) {
        this.#items.push(new CrumbItem(text, id))
        this.#addItemCrumb(text, onClick)
    }
    popCrumb() {
        if (this.#items.length > 0) {
            this.#items.pop()
            this.#container.lastChild.remove()
        }
    }
    clear(preserve = 0) {
        while (this.#items.length > preserve) {
            this.popCrumb()
        }
    }
    #addItemCrumb(text, onClick) {
        const crumb = document.createElement("a")
        crumb.className = "breadcrumb-item"
        crumb.text = text
        crumb.onclick = onClick
        this.#container.appendChild(crumb)
    }
}

class CrumbItem {
    text
    id
    constructor(text, id) {
        this.text = text
        this.id = id
    }
}