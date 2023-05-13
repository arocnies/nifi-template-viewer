import {NifiController} from "./nifi/NifiTemplateController";

const nifi = new NifiController("app", "detail", "breadcrumb")
const fileInput = document.getElementById("fileInput")
document.getElementById("load").onclick = () => {
    const file = fileInput.files[0]
    showTemplateFile(file)
}
fileInput.addEventListener("change", (e) => {
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

function importAll(r) {
    return r.keys().map((key) => {
        const fileName = key.split('/').pop()
        return {
            fileName,
            module: r(key),
        };
    });
}

const exampleFiles = importAll(require.context('/public/examples', false, /\.(xml)$/));
const exampleSelector = document.getElementById("examples")
const fileNames = exampleFiles.map((file) => file.fileName);
fileNames.forEach((file) => {
    const option = document.createElement("option")
    option.text = file.slice(0, -4)
    option.value = file
    exampleSelector.add(option)
})
const randomExampleBtn = document.getElementById("random")
randomExampleBtn.onclick = () => {
    exampleSelector.selectedIndex = Math.floor(Math.random() * exampleSelector.options.length)
    exampleSelector.dispatchEvent(new Event("change"));
}
exampleSelector.addEventListener("change", (_) => {
    const selectedFile = exampleSelector.value
    const fileName = "/examples/" + exampleFiles.find((file) => file.fileName === selectedFile).fileName;
    fetch(fileName)
        .then(response => response.text())
        .then(fileContent => {
            nifi.showTemplate(fileContent)
            fileInput.value = ""
        })
        .catch(error => {
            console.error(error)
        })
});

exampleSelector.dispatchEvent(new Event("change"))