var x = document.getElementById("login");
var y = document.getElementById("signup")

function signup() {
    if (x.style.display === "none") {
        x.style.display = "none"
        y.style.display = "block"

    } else {
        x.style.display = "none"
        y.style.display = "block"
    }
}

function login() {
    if (x.style.display === 'block') {
        x.style.display = 'block'
        y.style.display = 'none'
    } else {
        x.style.display = 'block'
        y.style.display = 'none'
    }
}