let blobWrapper = null
let nifiHeader = null

turboReady(function () {
    const originalBlobWrapper = document.querySelector(".blob-wrapper.type-xml")

    if (originalBlobWrapper) {
        blobWrapper = originalBlobWrapper.cloneNode(false)
        originalBlobWrapper.parentElement.insertBefore(blobWrapper, originalBlobWrapper)
        blobWrapper.addEventListener('mousedown', mouseDownHandler)
        blobWrapper.style.cursor = 'grab';
        installNiFiButton()
    }
})

function turboReady(fn) {
    document.addEventListener('turbo:load', (e) => {
        fn()
    });
    document.addEventListener('load', (e) => {
        fn()
    });
}

function installNiFiHeader(element) {
    const originalHeader = document.querySelector(".js-blob-header")
    if (originalHeader) {
        const newHeaderTitle = originalHeader.cloneNode(false)
        newHeaderTitle.style.borderRadius = "0px"

        const headerContainer = document.createElement("div")
        // headerContainer.appendChild(newHeaderTitle)
        headerContainer.style.height = "50px"
        headerContainer.style.border = "solid"
        headerContainer.style.margin = "10px"
        nifiHeader = headerContainer
        element.insertAdjacentElement('afterend', nifiHeader)
    }
}

function installNiFiButton() {
    const btnGroup = document.querySelector(".js-blob-header .BtnGroup")
    const nifiButton = document.createElement("button")
    nifiButton.className = "btn btn-sm BtnGroup-item"
    nifiButton.innerText = "NiFi"
    nifiButton.onclick = switchDiagramMode
    btnGroup.appendChild(nifiButton)
}

function showLoading() {
    const loadingNotice = document.createElement("div")
    loadingNotice.className = "loading-notice"
    loadingNotice.innerText = "Loading NiFi diagram..."
    loadingNotice.style.textAlign = "center"
    loadingNotice.style.paddingTop = "20px"
    loadingNotice.style.fontSize = "24px"
    blobWrapper.appendChild(loadingNotice)
}

function removeLoading() {
    const loadingNotice = document.querySelector("div.loading-notice")
    loadingNotice.remove()
}

async function getGitHubFile() {
    const fileUrl = window.location.href.replace('github.com', 'raw.githubusercontent.com').replace('/blob/', '/');
    showLoading()
    return fetch(fileUrl)
        .then(response => response.text())
        .then(text => {
            removeLoading()
            return text
        })
        .catch(error => {
            removeLoading()
            console.error(error);
            return ""
        });
}

async function switchDiagramMode() {
    let diagram = blobWrapper.querySelector(":scope > .diagram")
    const diagramHeight = "70vh"

    if (diagram?.hidden ?? true) { // is showing code
        if (diagram === null) {
            console.log("Initializing NiFi Diagram")
            const fileStr = await getGitHubFile()
            blobWrapper.style.height = diagramHeight
            blobWrapper.style.overflow = "auto"
            diagram = createNiFiDiagram(blobWrapper, fileStr)
            installNiFiHeader(blobWrapper)
            blobWrapper.scroll({
                top: diagram.offsetHeight / 4,
                left: diagram.offsetWidth / 4,
                behavior: "smooth",
            });
            // diagram.scrollIntoView({behavior: "smooth", block: "center"})
            diagram.scrollIntoView({block: "center"})
        }
        blobWrapper.style.height = diagramHeight
        showDiagram(diagram)
    } else { // Currently showing Diagram
        showCode(diagram)
        blobWrapper.style.height = "inherit"
    }
}

function showDiagram(diagram) {
    if (diagram) diagram.hidden = false
    if (nifiHeader) nifiHeader.hidden = false
}
function showCode(diagram) {
    if (diagram) diagram.hidden = true
    if (nifiHeader) nifiHeader.hidden = true
}

let pos = { top: 0, left: 0, x: 0, y: 0 };
const mouseDownHandler = function (e) {
    // Change the cursor and prevent user from selecting the text
    blobWrapper.style.cursor = 'grabbing';
    blobWrapper.style.userSelect = 'none';
    pos = {
        // The current scroll
        left: blobWrapper.scrollLeft,
        top: blobWrapper.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
    };
    document.addEventListener('mousemove', mouseMoveHandler);

    document.addEventListener('mouseup', mouseUpHandler);
};
const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;
    // Scroll the element

    blobWrapper.scrollTop = pos.top - dy;
    blobWrapper.scrollLeft = pos.left - dx;
};
const mouseUpHandler = function () {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
    blobWrapper.style.cursor = 'grab';

    blobWrapper.style.removeProperty('user-select');
};