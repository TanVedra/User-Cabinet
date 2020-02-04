let userEmail = getCookie('email');  // get email from a cookie
ajax('core/get_user_data.php', 'POST', getUserData, { 'email': userEmail }); // get user data from a server

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}

function getUserData(response) {   // fill inputs by user data
    response = JSON.parse(response);
    document.querySelector('.user-cabinet input[name="name"]').value = response.name;
    document.querySelector('.user-cabinet input[name="pass"]').value = response.password;
    document.querySelector('.user-cabinet input[name="birthday"]').value = response.birthday;
    document.querySelector(`.user-cabinet input[value="${response.sex}"]`).checked = true;
}

document.querySelector('.user-cabinet input[value="Update"]').onclick = (e) => {
    e.preventDefault();
    let sex;
    document.querySelectorAll('input[name="sex"]').forEach(element => {  // select checkbox[type="sex"].checked
        if (element.checked) {
            sex = element.value;
        }
    });

    if (isKyr(document.querySelector('.user-cabinet input[name="name"]').value) || isKyr(document.querySelector('.user-cabinet input[name="pass"]').value)) return alert('You must use only Latin letters!');

    let updateUserData = {  // collecting new data before sending
        'email': userEmail,
        'pass': document.querySelector('.user-cabinet input[name="pass"]').value,
        'birthday': document.querySelector('.user-cabinet input[name="birthday"]').value,
        'name': document.querySelector('.user-cabinet input[name="name"]').value,
        'sex': sex
    }

    ajax('core/update_user_data.php', 'POST', updateData, updateUserData);   // updating user data
}

function updateData(response) {  // show an update message
    if (response === '1') {
        alert('Updated successfully:)');
    } else {
        alert(response);
    }
}

function isKyr(str) {            // Cyrillic check function
    return /[а-яё]/i.test(str);
}