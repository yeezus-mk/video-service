const tabs = document.querySelectorAll('.btn--tab');

const films = document.querySelector('.films');
const channels = document.querySelector('.channels');

function switchTabs() {
  tabs.forEach(tab => {
    tab.addEventListener('change', (event) => {
      if (event.target.value === 'channels') {
        films.classList.add('hide');
        channels.classList.remove('hide');
      } else {
        films.classList.remove('hide');
        channels.classList.add('hide');
      }
    })
  });
};

