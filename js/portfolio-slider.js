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
  spaceBetween: 50,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  speed: 800,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  }, // працює по принципу mobile-first
  centeredSlides: true,
});
