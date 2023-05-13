import {NifiTemplate} from "./nifi/NifiTemplate";
import {Diagram} from "./diagram/Diagram";
import {NifiRenderer, SIZING_1_3, SIZING_NO_ENCODING} from "./nifi/NifiRenderer";
import {installTabPanes} from "./ui/TabPane";
import {DetailsPane} from "./nifi/NifiDetailsPane";
import {SimpleRenderer} from "./diagram/SimpleRenderer";
import {BreadcrumbPane} from "./ui/BreadcrumbPane";

const diagram = attachDiagram()
const simpleRenderer = new SimpleRenderer(diagram.diagramDiv)
const nifiRenderer = new NifiRenderer(diagram.diagramDiv)
let template
initTestControls()
installProcessorClick()
installProcessGroupNavigation()
installTabPanes()

function attachDiagram() {
    const container = document.getElementById("app")
    return new Diagram(container)
}

function initTestControls() {
    const fileInput = document.getElementById("fileInput")

    const loadDiagramButton = document.getElementById("loadDiagram")
    loadDiagramButton.onclick = () => {
        console.log(fileInput.value)
        fetch(fileInput.value)
            .then(response => response.text())
            .then(fileContent => {
                template = new NifiTemplate({xmlString: fileContent})
                diagram.renderer(simpleRenderer)
                diagram.showGraph(template.flow)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const renderNifi = document.getElementById("renderNifi")
    renderNifi.onclick = () => {
        console.log(fileInput.value)
        fetch(fileInput.value)
            .then(response => response.text())
            .then(fileContent => {
                template = new NifiTemplate({xmlString: fileContent})
                if (template.encodingVersion) nifiRenderer.setSizing(SIZING_1_3)
                diagram.renderer(nifiRenderer)
                diagram.showGraph(template.flow)
            })
            .catch(error => {
                console.error(error)
            })
    }
}

function installProcessorClick() {
    const detailsContainer = document.getElementById("detail")
    // const detailsPane = new DetailsPane(detailsContainer)

    function toggleFocus(element) {
        if (element === document.activeElement) {
            element.blur()
        } else {
            element.focus()
        }
    }

    document.addEventListener("nifi-click-processor", (e) => {
        toggleFocus(e.srcElement)
        console.log(e.detail)
        detailsPane.populateDetails(e.detail)
    })
}



function installProcessGroupNavigation() {
    const breadCrumbPane = new BreadcrumbPane(document.getElementById("breadcrumb"))
    breadCrumbPane.pushCrumb("NiFi", null, () => {
        while (breadCrumbPane.getPathIds().length > 1) {
            breadCrumbPane.popCrumb()
        }
        navigateHome()
    })

    function navigateHome() {
        diagram.showGraph(template.flow)
    }

    function navigateToPath() {
        const pgPath = breadCrumbPane.getPathIds()
        const pgId = pgPath[pgPath.length - 1]
        console.log(`Going to path ${pgId}`)
        const pgFlow = template.subFlow(pgId)
        diagram.showGraph(pgFlow)
    }

    document.addEventListener("nifi-dblclick-processGroup", (e) => {
        const processGroupName = e.detail.name[0]._text[0]
        const processGroupId = e.detail.id[0]._text[0]
        const newCrumbIndex = breadCrumbPane.getPathIds().length
        breadCrumbPane.pushCrumb(processGroupName, processGroupId, () => {
            for (let i = breadCrumbPane.getPathIds().length; i > newCrumbIndex+1; i--) {
                breadCrumbPane.popCrumb()
            }
            navigateToPath()
        })
        navigateToPath()
    })
}
