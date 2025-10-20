const menuBtn = document.querySelector('.menu-icon');
const header = document.querySelector('.header');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('menu-icon--active');
  header.classList.toggle('header--mobile');
});