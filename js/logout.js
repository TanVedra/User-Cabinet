document.querySelector('button.sign-out').onclick = function () {
    let date = new Date();
    date.setTime(date.getTime() - (24 * 60 * 60 * 1000));
    document.cookie = `email=${document.cookie}; expires=${date.toUTCString()}; path=/;`;
    location.reload();
}