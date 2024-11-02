const ele = document.createElement("div")
ele.className = "nav-container"
ele.innerHTML = `<header class="nav-header"><a class="nav-header_title" href="">Yas Site</a><nav class="user-nav"><a class="user-nav_icon-box" href="home.html">home</a><a class="user-nav_icon-box" href="explore.html">explore</a><a class="user-nav_icon-box" href="signup.html">sign-up</a><a class="user-nav_icon-box" href="submit.html">submit</a><a class="user-nav_icon-box" href="help.html">help</a></nav></header>`

var rootDiv = document.body.getElementsByClassName("root")
rootDiv[0].appendChild(ele)