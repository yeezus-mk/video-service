const modalBtn = document.querySelector('#modal');
const modalWindow = document.querySelector('.modal__window')
const modal = document.querySelector('.modal');
const body = document.querySelector('.body');

document.addEventListener('DOMContentLoaded', function() {
  modal.onsubmit = function() {
    return false;
  }
  modalBtn.addEventListener('click', function() {
    modal.classList.remove('hide');
    body.style.overflow = 'hidden';
  })
  window.onclick = function(event) {
    if (event.target == modal){
      modal.classList.add('hide');
      body.style.overflow = 'visible';
    }
    window.onkeydown = function(evt) {
      evt = evt || window.event;
      if (evt.key === 'Escape' || evt.key === 'Esc' || evt.keyCode === 27) {
        modal.classList.add('hide');
        body.style.overflow = 'visible';
      }
    }
  }
})
