var genresElements = document.getElementById("search-filters_genres")

var genreInput = document.getElementById("search-filter-genre_input")
var genreButton = document.getElementById("search-filter-genre_button")

var genresNum = 0

var gamesArea = document.getElementById("found-games")

var priceOptions = document.getElementsByClassName("search-filter-price_option")
var dateOptions = document.getElementsByClassName("search-filter-date_option")
var saleOptions = document.getElementsByClassName("search-filter-sale_option")

console.log(gamesArea)

for (i = 0; i < 5; i++){
    gamesArea.insertRow(i)
    for (x = 0; x < 5; x++){
        var newEle = document.createElement("td")

        newEle.innerHTML = `<div class="game-container"><div class="game-header"><div class="game-menu">...</div><div class="game-banner"><img src="https://img.tapimg.net/market/images/ceeeb7fa7494e8f7ccce8d4c9367dc9f.jpg?imageView2/0/w/720/h/405/format/jpg/interlace/1/ignore-error/1" alt="game banner"></div></div><div class="game-info"><div class="game-content"><h1>Game Name</h1><p>Game dev</p><p>Game description</p><div class="game-tags"></div></div><div class="game-side"><div class="game-price"><h1>$10.00</h1></div><div class="game-buttons"><button class="game-buttons_wishlist">Wishlist</button><button class="game-buttons_buy">Buy</button></div></div></div></div>`
        gamesArea.rows[i].appendChild(newEle)
    }
}

function removeFilterGenre(clickedId) {
    const selButton = document.getElementById(clickedId)
    selButton.parentElement.remove()
}

function addFilterGenre() {
    if (genreInput.value != "") {
        const newEle = document.createElement("td")
        newEle.className = "search-filter_genre"
        newEle.innerHTML = `<button onClick="removeFilterGenre(this.id)" id="${genresNum}">X</button>
                            <p>${genreInput.value}</p>`
        genresElements.rows[0].appendChild(newEle)
        genresNum++
    }
}

function choosePriceOption(clickedId) {
    for (i = 0; i < priceOptions.length; i++) {
        priceOptions[i].getElementsByClassName("option-circle_selected")[0].hidden = true
    }
    document.getElementById(clickedId).getElementsByClassName("option-circle_selected")[0].hidden = false
}

function chooseDateOption(clickedId) {
    for (i = 0; i < dateOptions.length; i++) {
        dateOptions[i].getElementsByClassName("option-circle_selected")[0].hidden = true
    }
    document.getElementById(clickedId).getElementsByClassName("option-circle_selected")[0].hidden = false
}

function chooseSaleOption(clickedId) {
    for (i = 0; i < dateOptions.length; i++) {
        saleOptions[i].getElementsByClassName("option-circle_selected")[0].hidden = true
    }
    document.getElementById(clickedId).getElementsByClassName("option-circle_selected")[0].hidden = false
}

genreButton.addEventListener('click', addFilterGenre)