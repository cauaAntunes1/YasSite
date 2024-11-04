var addFileElement = document.getElementById("download-file_add")
var removeFileElement = document.getElementById("download-file_minus")

var filesElements = document.getElementById("download-files_content")
var genresElements = document.getElementById("game-genres")

var genreInput = document.getElementById("game-genre_input")
var genreButton = document.getElementById("game-genre_button")

var genresNum = 0

function addFile() {
    const newEle = document.createElement("td")
    newEle.className = "download-file"
    newEle.innerHTML = `<div class="download-file_name">
    <p>File name</p><input placeholder="Insert file name" type="text">
    </div>
    <div class="download-file_file">
    <p>File</p><input type="file" name="gamefile" id="gamefile">
    </div>`
    filesElements.rows[0].appendChild(newEle)
    document.documentElement.scrollTop += 274
}

function removeFile() {
    if (filesElements.rows[0].cells.length > 1) {
        filesElements.rows[0].cells[filesElements.rows[0].cells.length - 1].remove()
    }
}


function removeGenre(clickedId) {
    const selButton = document.getElementById(clickedId)
    selButton.parentElement.remove()
}

function addGenre() {
    if (genreInput.value != "") {
        const newEle = document.createElement("td")
        newEle.className = "game-genres_content"
        newEle.innerHTML = `<button onClick="removeGenre(this.id)" id="${genresNum}">X</button>
                            <p>${genreInput.value}</p>`
        genresElements.rows[0].appendChild(newEle)
        genresNum++
    }
}


addFileElement.addEventListener('click', addFile)
removeFileElement.addEventListener('click', removeFile)
genreButton.addEventListener('click', addGenre)