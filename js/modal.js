document.querySelectorAll('.modal-show').forEach(element => element.onclick = modalShow);

document.querySelectorAll('.modal-close').forEach(element => element.onclick = modalClose);

document.querySelectorAll('.modal-wrapper').forEach(element => element.onclick = modalClose);  // Disabling modal window when clicked outside the modal window

document.querySelectorAll('.modal').forEach(element => element.onclick = event => event.stopPropagation()); // Disabling bubbling when clicked directly on the modal window

function modalShow() {
    let modalClass = this.dataset.modal;
    document.querySelector(modalClass).classList.add('show');
    document.onkeydown = (e) => {
        if (e.keyCode === 27) modalClose();    // will close modal window if 'esc' button is pressed
        if (e.keyCode === 9) e.preventDefault();  // will disable 'tab' button if  modal window is active
    }
    document.body.style.overflow = 'hidden';
}

function modalClose() {
    let modalClass = this.dataset.modal;
    document.querySelector(modalClass).classList.remove('show');
    document.body.style.overflow = 'visible';
    document.onkeydown = null;
    clearFormData();
}

function clearFormData() {    // clear form-inputs
    document.querySelectorAll('.modal input[type="text"]').forEach(text => text.value = '');
    document.querySelectorAll('.modal input[type="email"]').forEach(email => email.value = '');
    document.querySelectorAll('.modal input[type="password"]').forEach(password => password.value = '');
    document.querySelectorAll('.modal input[type="date"]').forEach(date => date.value = '');
    document.querySelectorAll('.modal input[name="rules-agreement"]').forEach(rules => rules.checked = false);
    document.querySelector('.modal input[name="sex"]').checked = true;
    slideRight();
}