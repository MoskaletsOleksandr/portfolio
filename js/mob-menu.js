export const mobMenuOpen = document.querySelector('.js-menu-open');

export const menuContainer = document.querySelector('.js-menu-container');

export const mobMenuClose = document.querySelector('.js-menu-close');

mobMenuOpen.addEventListener('click', () => {
  menuContainer.classList.add('is-open');
  document.body.classList.add('is-menu-open');
});

mobMenuClose.addEventListener('click', () => {
  menuContainer.classList.remove('is-open');
  document.body.classList.remove('is-menu-open');
});
