const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');
const screenWidth = window.matchMedia('(max-width: 320px)');

const onNavToggleClick = () => {
  nav.classList.toggle('nav--opened');
  nav.classList.toggle('nav--closed');
};

const renderMobileNav = () => {
  nav.classList.remove('nav--nojs');
  nav.classList.add('nav--closed');
  navToggle.addEventListener('click', onNavToggleClick);
};

const renderDesktopNav = () => {
  nav.classList.add('nav--nojs');
  nav.classList.remove('nav--opened');
  nav.classList.remove('nav--closed');
  navToggle.removeEventListener('click', onNavToggleClick);
};

(screenWidth.matches) ? renderMobileNav() : renderDesktopNav();

const changeNav = (evt) => (evt.matches) ? renderMobileNav() : renderDesktopNav();

screenWidth.addEventListener('change', changeNav);
