const login = document.querySelector('#login');
const password = document.querySelector('#password');
const signIn = document.querySelector('#signIn')
const logOut = document.querySelector('#logOut');
const user = document.querySelector('.auth__username');
const checkbox = document.querySelector('#check');

document.addEventListener('DOMContentLoaded', function() {
  console.log(sessionStorage.getItem("is_reloaded"))
  signIn.addEventListener('click', authHandler)
  if (sessionStorage.getItem("is_reloaded") === "true") {
    modalBtn.classList.add('hide');
    user.classList.remove('hide');
    logOut.classList.remove('hide');
    user.value = localStorage.getItem('user');
  }
})

function authHandler() {
  if (login.value !== ""  && password.value !== "") {
    sessionStorage.setItem("is_reloaded", true)
    localStorage.setItem('user', login.value);
    modal.classList.add('hide');
    body.style.overflow = 'visible';
    modalBtn.classList.add('hide');
    user.classList.remove('hide');
    logOut.classList.remove('hide');
    user.value = localStorage.getItem('user');
  }
  if (checkbox.checked) {
    localStorage.setItem('login', login.value);
  }
}

user.addEventListener('change', () => {
  localStorage.setItem('user', user.value);
})
