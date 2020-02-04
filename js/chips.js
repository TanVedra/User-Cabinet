function chips(element) {
    let chip = document.createElement('div');

    chip.classList.add('message');

    if (typeof element === 'string') {
        chip.textContent = element;
    } else {
        if (element.name === 'rules-agreement') {
            chip.textContent = `You need to submit ${element.name}!`;
        } else {
            chip.textContent = `You need to enter ${element.name}!`;
        }
    }
    addChips(chip);
    setTimeout(function () {
        deleteChips(chip)
    }, 3000);
}

function deleteChips(chip) {
    let allChips = document.querySelectorAll('.message-field .message');
    chip.remove();
    if (allChips.length === 1) document.querySelector('.message-field').remove();
}

function addChips(chip) {
    let chipsField = document.querySelector('.message-field');
    if (chipsField) {
        chipsField.appendChild(chip);
    } else {
        let chipsField = document.createElement('div');
        chipsField.classList.add('message-field');
        document.querySelector('.show .modal-content').appendChild(chipsField);
        chipsField.appendChild(chip);
    }
}