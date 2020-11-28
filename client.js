$(document).ready(onReady);

function onReady(params) {
    $('.github').on('click', github)
    $('.linkedin').on('click', linkedin)
}

function github() {
    location.href = "https://github.com/Cassen999"
}

function linkedin() {
    location.href = "https://linkedin.com/in/cassen-gerber/"
}