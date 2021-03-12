const tabFilms = document.querySelector('#tab__films');
const tabChannels = document.querySelector('#tab__channels');

const tabs = document.querySelectorAll('.btn--tab');

const films = document.querySelector('.films');
const channels = document.querySelector('.channels');

document.addEventListener('DOMContentLoaded', function() {
  tabFilms.addEventListener('click', function() {
    films.classList.remove('hide');
    channels.classList.add('hide');
  });
  tabChannels.addEventListener('click', function() {
    films.classList.add('hide');
    channels.classList.remove('hide');
  });
});

