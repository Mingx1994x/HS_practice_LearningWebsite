const userPassword = document.querySelector('#userPassword');
const hidden = document.querySelector('#hiddenPassword');
userPassword.addEventListener('input', () => {
    console.log(userPassword.value);
    // if (userPassword.value.length > 0) {
    //     hidden.classList.remove('d-none')
    // } else {
    //     hidden.classList.add('d-none')
    // }
});