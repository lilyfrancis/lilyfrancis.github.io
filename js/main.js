const goUp = document.querySelector('.go-up');
window.onscroll = () => {
};

const weSingMenu = document.getElementById('festival_menu');
const openWesingMenu = document.getElementById('bars');
const closeWesingMenu = document.getElementById('close-menu');
const clickLinks = document.querySelectorAll('.header-link');

openWesingMenu.addEventListener('click', () => {
  weSingMenu.style.top = '0';
});

closeWesingMenu.addEventListener('click', () => {
  weSingMenu.style.top = '-110%';
});

clickLinks.forEach((link) => {
  link.addEventListener('click', () => {
    weSingMenu.style.top = '-110%';
  });
});
