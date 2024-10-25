const ele = document.createElement('td')

ele.innerHTML=`<div class="game-container"><div class="game-header"><div class="game-menu">...</div><div class="game-banner"><img src="https://img.tapimg.net/market/images/ceeeb7fa7494e8f7ccce8d4c9367dc9f.jpg?imageView2/0/w/720/h/405/format/jpg/interlace/1/ignore-error/1" alt="game banner"></div></div><div class="game-info"><div class="game-content"><h1>Game Name</h1><p>Game dev</p><p>Game description</p><div class="game-tags"></div></div><div class="game-side"><div class="game-price"><h1>$10.00</h1></div><div class="game-buttons"><button class="game-buttons_wishlist">Wishlist</button><button class="game-buttons_buy">Buy</button></div></div></div></div>`

document.body.appendChild(ele);
