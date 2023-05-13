import {NifiController} from "./nifi/NifiTemplateController";

const nifi = new NifiController("app", "detail", "breadcrumb")
const fileInput = document.getElementById("fileInput")
document.getElementById("load").onclick = () => {
    const file = fileInput.files[0]
    showTemplateFile(file)
}
fileInput.addEventListener("change", (_) => {
    showTemplateFile(fileInput.files[0])
});

function showTemplateFile(file) {
    if (file) {
        const reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = function (evt) {
            nifi.showTemplate(evt.target.result)
            // document.getElementById("fileContents").innerHTML = evt.target.result;
        }
        reader.onerror = function (evt) {
            // document.getElementById("fileContents").innerHTML = "error reading file";
        }
    }
}

const loadExampleFiles = () => {
    const exampleSelector = document.getElementById("examples")

    // Fetch the file list
    fetch('/examples/filelist.json')
        .then((response) => response.json())
        .then((fileList) => {
            fileList.forEach((fileName) => {
                const option = document.createElement("option")
                option.text = fileName.slice(0, -4)
                option.value = fileName
                exampleSelector.add(option)
            })

            exampleSelector.addEventListener("change", (_) => {
                const selectedFile = exampleSelector.value
                const filePath = "/examples/" + selectedFile
                fetch(filePath)
                    .then((response) => response.text())
                    .then((fileContent) => {
                        nifi.showTemplate(fileContent)
                        fileInput.value = ""
                    })
                    .catch((error) => {
                        console.error(error)
                    })
            })

            exampleSelector.dispatchEvent(new Event("change"))
        })
        .catch((error) => {
            console.error(error)
        })
    const randomExampleBtn = document.getElementById("random")
    randomExampleBtn.onclick = () => {
        exampleSelector.selectedIndex = Math.floor(Math.random() * exampleSelector.options.length)
        exampleSelector.dispatchEvent(new Event("change"))
    }
}

loadExampleFiles()
