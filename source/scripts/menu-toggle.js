const MENU_CLASS = 'header__nav';
const MENU_MODIFIER = '--is-opened';
const BUTTON_CLASS = 'header__menu-toggle';
const BUTTON_MODIFIER = '--is-opened';

const menu = document.querySelector(`.${MENU_CLASS}`);
const menuButton = document.querySelector(`.${BUTTON_CLASS}`);

const toggleMenu = () => {
  menu.classList.toggle(`${MENU_CLASS}${MENU_MODIFIER}`);
  menuButton.classList.toggle(`${BUTTON_CLASS}${BUTTON_MODIFIER}`);
};

const init = () => {
  menuButton.addEventListener('click', toggleMenu);
};

export {init};
