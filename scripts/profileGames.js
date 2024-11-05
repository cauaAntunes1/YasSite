
var shelfs = ["shelf-owned_games", "shelf-wishlist_games"]

for (x = 0; x < shelfs.length; x++) {
    var desiredShelf = document.getElementById(shelfs[x])

    var numb = window.innerWidth / 304

    numb -= 1.5
    numb = Math.ceil(numb)

    for (i = 0; i < numb; i++) {
        const ele = document.createElement('td')

        ele.innerHTML = `<div class="game-container">
                            <div class="game-header">
                                <div class="game-menu">...</div>
                                    <div class="game-banner">
                                        <img src="https://img.tapimg.net/market/images/ceeeb7fa7494e8f7ccce8d4c9367dc9f.jpg?imageView2/0/w/720/h/405/format/jpg/interlace/1/ignore-error/1" alt="game banner">
                                    </div>
                                </div>
                                <div class="game-info">
                                    <div class="game-content">
                                        <h1>Game Name</h1>
                                        <p>Game dev</p>
                                        <p>Game description</p>
                                        <div class="game-tags">
                                    </div>
                                </div>
                                <div class="game-side">
                                    <div class="game-price">
                                        <h1>$10.00</h1>
                                    </div>
                                    <div class="game-buttons">
                                        <button class="game-buttons_wishlist">Wishlist</button>
                                        <button class="game-buttons_buy">Buy</button>
                                    </div>
                                </div>
                            </div>
                        </div>`

        desiredShelf.appendChild(ele);
    }

    var buttonSize = (window.innerWidth / numb) - 18

    const buttonDiv = document.createElement("div")
    buttonDiv.className = "games-more"
    buttonDiv.style.width = buttonSize + "px"


    const newButton = document.createElement("a")
    newButton.innerHTML = "See More..."
    newButton.className = "games-more_button"
    newButton.href = "search.html"

    buttonDiv.appendChild(newButton)

    desiredShelf.appendChild(buttonDiv)
}

