//header buttons
var homeBttnHeder = document.getElementById('homeBttnHeder');
var coursesBttnHeder = document.getElementById('coursesBttnHeder');
var BttnHeder = document.getElementById('BttnHeder');
var deveBttnHeder = document.getElementById('deveBttnHeder');

//sections of home 
var home = document.getElementById('home');
var learnFast = document.getElementById('learnFast');
var understandCodes = document.getElementById('understandCodes');
var collectExper = document.getElementById('collectExper');
var learnSimple = document.getElementById('learnSimple');
var x = 0;
homeBttnHeder.addEventListener("click", function () {
    x = x + 1;
    test()
})


function test() {

    // con 0
    if (x === 0) {
        home.style.display = "block"

    } else {
        home.style.display = "none"

    }
    //con 1
    if (x === 1) {
        learnFast.style.display = "block"

    } else {
        learnFast.style.display = "none"

    }
    //con 2 understandCodes
    if (x === 2) {
        understandCodes.style.display = "block"

    } else {
        understandCodes.style.display = "none"

    }
    //con 3 collectExper
    if (x === 3) {
        collectExper.style.display = "block"

    } else {
        collectExper.style.display = "none"

    }
    //con 4 learn simple
    if (x === 4) {
        learnSimple.style.display = "block"
        x = -1;

    } else {
        learnSimple.style.display = "none"

    }

}