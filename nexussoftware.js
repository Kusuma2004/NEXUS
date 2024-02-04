let cardE1 = document.getElementById("card1");
let cardE2 = document.getElementById("card2");
let cardE3 = document.getElementById("card3");
let cardE4 = document.getElementById("card4");
let cardE5 = document.getElementById("card5");
let minusE1 = document.getElementById("minus1");
let minusE2 = document.getElementById("minus2");
let minusE3 = document.getElementById("minus3");
let minusE4 = document.getElementById("minus4");
let minusE5 = document.getElementById("minus5");
let addE1 = document.getElementById("add1");
let addE2 = document.getElementById("add2");
let addE3 = document.getElementById("add3");
let addE4 = document.getElementById("add4");
let addE5 = document.getElementById("add5");

function cardicon1() {
    cardE1.classList.remove("d-none");
    minusE1.classList.remove("d-none");
    addE1.classList.add("d-none");
}

function minusicon1() {
    cardE1.classList.add("d-none");
    minusE1.classList.add("d-none");
    addE1.classList.remove("d-none");

}

function cardicon2() {
    cardE2.classList.remove("d-none");
    minusE2.classList.remove("d-none");
    addE2.classList.add("d-none");
}

function minusicon2() {
    cardE2.classList.add("d-none");
    minusE2.classList.add("d-none");
    addE2.classList.remove("d-none");

}

function cardicon3() {
    cardE3.classList.remove("d-none");
    minusE3.classList.remove("d-none");
    addE3.classList.add("d-none");
}

function minusicon3() {
    cardE3.classList.add("d-none");
    minusE3.classList.add("d-none");
    addE3.classList.remove("d-none");

}

function cardicon4() {
    cardE4.classList.remove("d-none");
    minusE4.classList.remove("d-none");
    addE4.classList.add("d-none");
}

function minusicon4() {
    cardE4.classList.add("d-none");
    minusE4.classList.add("d-none");
    addE4.classList.remove("d-none");

}

function cardicon5() {
    cardE5.classList.remove("d-none");
    minusE5.classList.remove("d-none");
    addE5.classList.add("d-none");
}

function minusicon5() {
    cardE5.classList.add("d-none");
    minusE5.classList.add("d-none");
    addE5.classList.remove("d-none");

}