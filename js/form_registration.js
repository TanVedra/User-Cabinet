let modalForm = document.querySelector('form.modal-form');       // form    

document.querySelector('input[value="Sign Up"]').onclick = function (e) {
    e.preventDefault();                                           // disabling default form-tag behaviour
    if (document.querySelector('.message-field') === null) {      // check for active chips
        for (i = 0; i < modalForm.elements.length; i++) {
            if (modalForm.elements[i].name === 'rules-agreement') {   // agree with the rules
                if (modalForm.elements[i].checked === false) {
                    chips(modalForm.elements[i]);
                }
            } else if (modalForm.elements[i].value === '') {
                chips(modalForm.elements[i]);
            } else if (isKyr(modalForm.elements[i].value)) {         // check for cyrillic letters
                chips('You must use only Latin letters!');
            } else if (modalForm.elements[i].type === 'email') {
                checkEmail(modalForm.elements[i].value);             // check email for valid
            }
        }
    }
    return (document.querySelector('.message-field')) ? false : formDataRequest(); // if all is well, will call the input-data creation function
}

function formDataRequest() {  // input-data creation function
    let sex;

    document.querySelectorAll('input[name="sex"]').forEach(element => {  // select checkbox[type="sex"].checked
        if (element.checked) {
            sex = element.value;
        }
    });

    let data = {
        "name": document.querySelector('input[name="name"]').value,
        "email": document.querySelector('input[name="email"]').value,
        "pass": document.querySelector('input[name="pass"]').value,
        "birthday": document.querySelector('input[name="birthday"]').value,
        "sex": sex
    }
    ajax('core/signup.php', 'POST', serverResponse, data); // sending a request to the server
}

function serverResponse(response) { // receiving a response from the server
    if (response === '1') {
        alert('Registration Successful :)');
    } else if (response === '2') {
        alert('Data is incomplete!');
    } else {
        alert('Something went wrong :( Try again later.');
    }
    clearFormData();
}

function checkEmail(str) {        // email check function
    let email = str.match(/^[0-9a-z-\.]+\@[0-9a-z-]{1,}\.[a-z]{2,}$/i);
    if (!email) {
        chips('Entered email is not valid!');
        return false;
    }
}

function isKyr(str) {            // Cyrillic check function
    return /[а-яё]/i.test(str);
}