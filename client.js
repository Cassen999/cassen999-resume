$(document).ready(onReady);

function onReady(params) {
    $('.github').on('click', github)
    $('.linkedin').on('click', linkedin)
    $('#star-trek').on('click', pollItemOne)
    $('#star-wars').on('click', pollItemTwo)
    $('#neither').on('click', pollItemThree)
    appendDom();
}

function appendDom() {
    
}

function github() {
    location.href = "https://github.com/Cassen999"
}

function linkedin() {
    location.href = "https://linkedin.com/in/cassen-gerber/"
}

let itemOne = 0;
let itemTwo = 0;
let itemThree = 0;
let pollWinner;

function pollItemOne() {
    itemOne +=1
}

function pollItemTwo() {
    itemTwo +=1
}

function pollItemThree() {
    itemThree +=1
}

function winner() {
    if (itemOne > itemTwo && itemOne > itemThree) {
        pollWinner = 'Star Trek'
    }
    else if (itemTwo > itemOne && itemTwo > itemThree) {
        pollWinner = 'Star Wars'
    }
    else if (itemThree > itemOne && itemThree > itemTwo) {
        pollWinner = 'Yuck, neither!'
    }
}