import { mobMenuOpen, menuContainer, mobMenuClose } from './mob-menu.js';
import { handleScroll } from './scroll.js';

window.addEventListener('scroll', handleScroll);

new Swiper('.testimonial-slider', {
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
