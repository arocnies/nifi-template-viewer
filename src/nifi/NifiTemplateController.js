import {Diagram} from "../diagram/Diagram";
import {NifiRenderer, SIZING_1_3, SIZING_NO_ENCODING} from "./NifiRenderer";
import {DetailsPane} from "./NifiDetailsPane";
import {BreadcrumbPane} from "../ui/BreadcrumbPane";
import {NifiTemplate} from "./NifiTemplate";
import {installTabPanes} from "../ui/TabPane";

export class NifiController {
    #diagram
    #render
    #template
    #detailsPane
    #breadcrumbPane

    constructor(diagramId, detailsId, breadcrumbId) {
        this.#diagram = new Diagram(document.getElementById(diagramId))
        this.#render = new NifiRenderer(this.#diagram.diagramDiv)
        this.#diagram.renderer(this.#render)

        this.#detailsPane = new DetailsPane(document.getElementById(detailsId));
        this.#breadcrumbPane = new BreadcrumbPane(document.getElementById(breadcrumbId));

        this.#installControls()
    }

    showTemplate(templateStr) {
        this.#template = new NifiTemplate({xmlString: templateStr})
        if (this.#template.encodingVersion) {
            this.#render.setSizing(SIZING_1_3)
        } else {
            this.#render.setSizing(SIZING_NO_ENCODING)
        }
        this.#diagram.showGraph(this.#template.flow)
        this.#breadcrumbPane.clear(1)
    }

    #installControls() {
        this.#installProcessorClick()
        this.#installProcessGroupNavigation()
        installTabPanes()
    }
    #installProcessorClick() {
        function toggleFocus(element) {
            if (element === document.activeElement) {
                element.blur()
            } else {
                element.focus()
            }
        }

        document.addEventListener("nifi-click-processor", (e) => {
            toggleFocus(e.srcElement)
            this.#detailsPane.populateDetails(e.detail)
        })
    }
    #installProcessGroupNavigation() {
        this.#breadcrumbPane.pushCrumb("NiFi", null, () => {
            while (this.#breadcrumbPane.getPathIds().length > 1) {
                this.#breadcrumbPane.popCrumb()
            }
            navigateHome()
        })

        const navigateHome = () => {
            this.#diagram.showGraph(this.#template.flow)
        }

        const navigateToPath = () => {
            const pgPath = this.#breadcrumbPane.getPathIds()
            const pgId = pgPath[pgPath.length - 1]
            console.log(`Going to path ${pgId}`)
            const pgFlow = this.#template.subFlow(pgId)
            this.#diagram.showGraph(pgFlow)
        }

        document.addEventListener("nifi-dblclick-processGroup", (e) => {
            const processGroupName = e.detail.name[0]._text[0]
            const processGroupId = e.detail.id[0]._text[0]
            const newCrumbIndex = this.#breadcrumbPane.getPathIds().length
            this.#breadcrumbPane.pushCrumb(processGroupName, processGroupId, () => {
                for (let i = this.#breadcrumbPane.getPathIds().length; i > newCrumbIndex+1; i--) {
                    this.#breadcrumbPane.popCrumb()
                }
                navigateToPath()
            })
            navigateToPath()
        })
    }
}