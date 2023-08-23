import { mobMenuOpen, menuContainer, mobMenuClose } from './mob-menu.js';
import { initPortfolioFilter } from './portfolioFilter.js';
import { handleScroll } from './scroll.js';

window.addEventListener('scroll', handleScroll);

initPortfolioFilter();

const sliderBlock = document.querySelector('.testimonial__wrapper');

const testimonialSlider = new Swiper('.testimonial-slider', {
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  grabCursor: true,
  //   slideToClickedSlide: true,
  keyboard: {
    enabled: true,
    onlyInViewPort: true,
  },
  //   slidesPerView: 3, //це для слайдера портфоліо
  //   watchOverflow: true, //щоб прибрати слайдер, якщо кількість слайдів менша, ніж попереднє налаштування
  spaceBetween: 50,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  speed: 800,
  //   breakpoints: {
  //     1200: {
  //       slidesPerView: 2,
  //     },
  //   }, // працює по принципу mobile-first
});

sliderBlock.addEventListener('mouseenter', () => {
  testimonialSlider.autoplay.stop();
});

sliderBlock.addEventListener('mouseleave', () => {
  testimonialSlider.autoplay.start();
});
