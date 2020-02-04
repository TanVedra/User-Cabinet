let signInForm = document.querySelector('.modal-wrapper-signin form');

document.querySelector('input[value="Sign In"]').onclick = function (e) {
    e.preventDefault();                                           // disabling default form-tag behaviour
    if (document.querySelector('.message-field') === null) {      // check for active chips        
        for (i = 0; i < signInForm.elements.length; i++) {
            if (signInForm.elements[i].value === '') {
                chips(signInForm.elements[i]);
            } else if (isKyr(signInForm.elements[i].value)) {         // check for cyrillic letters
                chips('You must use only Latin letters!');
            } else if (signInForm.elements[i].type === 'email') {
                checkEmail(signInForm.elements[i].value);             // check email for valid
            }
        }
    }
    return (document.querySelector('.message-field')) ? false : loginDataRequest(); // if all is well, will call the input-data creation function
}

function loginDataRequest() {  // input-data creation function
    let data = {
        "email": document.querySelector('.modal-wrapper-signin input[name="email"]').value,
        "pass": document.querySelector('.modal-wrapper-signin input[name="pass"]').value
    }
    ajax('core/login.php', 'POST', loginServerResponse, data); // sending a request to the server (authorization)
}

function loginServerResponse(response) { // receiving a response from the server
    if (response === '0') {
        alert('User not found :(');
    } else if (response === '2') {
        alert('Data is incomplete!');
    } else {
        response = JSON.parse(response);  // if successful will create a cookie
        let date = new Date();
        date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
        document.cookie = `email=${response.email}; expires=${date.toUTCString()}; path=/;`;
        location.href = 'cabinet.php';
    }
    clearFormData();
}