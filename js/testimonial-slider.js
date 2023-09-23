const testimonialSliderBlock = document.querySelector('.testimonial__wrapper');

const testimonialSlider = new Swiper('.testimonial-slider', {
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
  keyboard: {
    enabled: true,
    onlyInViewPort: true,
  },
  spaceBetween: 50,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  speed: 800,
});
