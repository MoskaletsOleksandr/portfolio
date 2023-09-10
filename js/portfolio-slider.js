export const portfolioSliderBlock = document.querySelector('.portfolio__wrapper');

export const portfolioSlider = new Swiper('.portfolio-slider', {
  navigation: {
    nextEl: '.portfolio-btn-next',
    prevEl: '.portfolio-btn-prev',
  },
  pagination: {
    el: '.portfolio-swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  grabCursor: true,
  //   slideToClickedSlide: true,
  keyboard: {
    enabled: true,
    onlyInViewPort: true,
  },
  slidesPerView: 1, //це для слайдера портфоліо
  watchOverflow: true, //щоб прибрати слайдер, якщо кількість слайдів менша, ніж попереднє налаштування
  spaceBetween: 100,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  speed: 800,
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
  }, // працює по принципу mobile-first
});
