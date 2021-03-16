const login = document.querySelector('#login');
const password = document.querySelector('#password');
const signIn = document.querySelector('#signIn')
const logOut = document.querySelector('#logOut');
let user = document.querySelector('.auth__username');

localStorage.setItem('user', 'user');

document.addEventListener('DOMContentLoaded', function() {
  signIn.addEventListener('click', function() {
    if (login.value === "user" && password.value === "123") {
      userName = login.value;
      modal.classList.add('hide');
      body.style.overflow = 'visible';
      modalBtn.classList.add('hide');
      user.classList.remove('hide');
      logOut.classList.remove('hide');
      user.value = localStorage.getItem('user');
    } else {
      alert('Неверный логин или пароль');
    }
  })
})