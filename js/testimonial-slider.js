export const testimonialSliderBlock = document.querySelector('.testimonial__wrapper');

export const testimonialSlider = new Swiper('.testimonial-slider', {
  navigation: {
    nextEl: '.testimonial-btn-next',
    prevEl: '.testimonial-btn-prev',
  },
  pagination: {
    el: '.testimonial-swiper-pagination',
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
