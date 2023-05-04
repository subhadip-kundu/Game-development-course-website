const hamburgerMenu = document.querySelector('#ham-icon');
const active = document.querySelector('.after-ham ');

hamburgerMenu.addEventListener('click', () => {
  active.classList.toggle('active');
});
