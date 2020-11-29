// Working on poll logic but ran out of time, I will still complete this

$(document).ready(onReady);

function onReady(params) {
    $('.github').on('click', github)
    $('.linkedin').on('click', linkedin)
    // appendDom();
}

// function appendDom() {
//     $('.star-trek').on('click', pollItemOne)
//     $('.star-wars').on('click', pollItemTwo)
//     $('.neither').on('click', pollItemThree)
//     winner();
//     $('.poll-winner').append(`This week's winner so far is ${pollWinner}!`)

// }

function github() {
    location.href = "https://github.com/Cassen999"
}

function linkedin() {
    location.href = "https://linkedin.com/in/cassen-gerber/"
}

// let itemOne = 0;
// let itemTwo = 0;
// let itemThree = 0;
// let pollWinner = '';



// function pollItemOne() {
//     itemOne ++;
//     console.log(itemOne)
//     winner()
// }

// function pollItemTwo() {
//     itemTwo ++;
//     console.log(itemTwo)
//     winner()
// }

// function pollItemThree() {
//     itemThree ++;
//     console.log(itemThree)
//     winner()
// }

// function winner() {
//     if (itemOne > itemTwo && itemOne > itemThree) {
//         pollWinner = 'Star Trek'
//     }
//     else if (itemTwo > itemOne && itemTwo > itemThree) {
//         pollWinner = 'Star Wars'
//     }
//     else if (itemThree > itemOne && itemThree > itemTwo) {
//         pollWinner = 'Yuck, neither!'
//     }
//     else {
//         pollWinner = 'No winner yet!'
//     }
//     console.log(pollWinner)
// }