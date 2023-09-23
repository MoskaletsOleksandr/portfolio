const portfolioSliderBlock = document.querySelector('.portfolio__wrapper');

const portfolioSlider = new Swiper('.portfolio-slider', {
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
  keyboard: {
    enabled: true,
    onlyInViewPort: true,
  },
  slidesPerView: 1,
  watchOverflow: true,
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
  },
  centeredSlides: true,
});
