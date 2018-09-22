var blueCounter = document.getElementById("blue")
var redCounter = document.getElementById("red")
var stormCounter = document.getElementById("storm")

var red = 0
var blue = 0
var storm = 0

function plusb() {
    blue++;
    document.getElementById("blue").innerHTML = blue
}

function minusb() {
    blue--;
    document.getElementById("blue").innerHTML = blue
}

function plusr() {
    red++;
    document.getElementById("red").innerHTML = red
}

function minusr() {
    red--;
    document.getElementById("red").innerHTML = red
}

function pluss() {
    storm++;
    document.getElementById("storm").innerHTML = storm
}

function minuss() {
    storm--;
    document.getElementById("storm").innerHTML = storm
}
