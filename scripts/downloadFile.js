var addFileElement = document.getElementById("download-file_add")
var removeFileElement = document.getElementById("download-file_minus")

var filesElements = document.getElementById("download-files_content")

function addFile() {
    const newEle = document.createElement("td")
    newEle.className = "download-file"
    newEle.innerHTML = `<div class="download-file_name"><p>File name</p><input placeholder="Insert file name" type="text">    </div><div class="download-file_file"><p>File</p><input type="file" name="gamefile" id="gamefile"></div>`
    filesElements.rows[0].appendChild(newEle)
    document.documentElement.scrollTop += 274
}

function removeFile() {
    if (filesElements.rows[0].cells.length > 1) {
        filesElements.rows[0].cells[filesElements.rows[0].cells.length - 1].remove()
    }
}

addFileElement.addEventListener('click', addFile)
removeFileElement.addEventListener('click', removeFile)