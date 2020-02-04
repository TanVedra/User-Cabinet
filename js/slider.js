document.querySelectorAll('.rules-in').forEach(element => element.onclick = slideLeft);   // show rules

document.querySelectorAll('.rules-out').forEach(element => element.onclick = slideRight);  // close rules

function slideLeft() {
    document.querySelector('.modal-sides-wrapper').style.left = '-100%';
}

function slideRight() {
    document.querySelector('.modal-sides-wrapper').style.left = '0';
}