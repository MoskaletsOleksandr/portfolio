export const mobMenuOpen = document.querySelector('.js-menu-open');

export const menuContainer = document.querySelector('.js-menu-container');

export const mobMenuClose = document.querySelector('.js-menu-close');

mobMenuOpen.addEventListener('click', () => {
  console.log('mobMenuOpen');
  menuContainer.classList.add('is-open');
});

mobMenuClose.addEventListener('click', () => {
  console.log('mobMenuClose');
  menuContainer.classList.remove('is-open');
});
