var x = document.getElementById("login");
var y = document.getElementById("signup")

var text1 = document.getElementById("loginText")
var text2 = document.getElementById("signupText")

function signup() {
    if (x.style.display === "none") {
        // display
        x.style.display = "none"
        y.style.display = "block"
        // color
        text1.style.color = "#B9B9B9"
        text2.style.color = "#000"
        // underline
        text1.style.textDecoration = "none"
        text2.style.textDecoration = "underline"
    } else {
        // display
        x.style.display = "none"
        y.style.display = "block"
        // color
        text1.style.color = "#B9B9B9"
        text2.style.color = "#000"
        // underline
        text1.style.textDecoration = "none"
        text2.style.textDecoration = "underline"
    }
}

function login() {
    if (x.style.display === 'block') {
        // display
        x.style.display = 'block'
        y.style.display = 'none'
        // color
        text1.style.color = "#000"
        text2.style.color = "#B9B9B9"
        // underline
        text1.style.textDecoration = "underline"
        text2.style.textDecoration = "none"
    } else {
        // display
        x.style.display = 'block'
        y.style.display = 'none'
        // color
        text1.style.color = "#000"
        text2.style.color = "#B9B9B9"
        // underline
        text1.style.textDecoration = "underline"
        text2.style.textDecoration = "none"
    }
}