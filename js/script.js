import { mobMenuOpen, menuContainer, mobMenuClose } from './mob-menu.js';
import { portfolioSliderBlock, portfolioSlider } from './portfolio-slider.js';
import { initPortfolioFilter } from './portfolioFilter.js';
import { handleScroll } from './scroll.js';
import { testimonialSliderBlock, testimonialSlider } from './testimonial-slider.js';

window.addEventListener('scroll', handleScroll);

initPortfolioFilter();

if (testimonialSliderBlock) {
  testimonialSliderBlock.addEventListener('mouseenter', () => {
    testimonialSlider.autoplay.stop();
  });

  testimonialSliderBlock.addEventListener('mouseleave', () => {
    testimonialSlider.autoplay.start();
  });
}

if (portfolioSliderBlock) {
  portfolioSliderBlock.addEventListener('mouseenter', () => {
    portfolioSlider.autoplay.stop();
  });

  portfolioSliderBlock.addEventListener('mouseleave', () => {
    portfolioSlider.autoplay.start();
  });
}

const openModalButtons = document.querySelectorAll('.open-modal-button');
const closeModalButton = document.querySelector('#modal__close-btn');
const contactModal = document.querySelector('#contactModal');

function openModal() {
  contactModal.classList.remove('is-hidden');
}

function closeModal() {
  contactModal.classList.add('is-hidden');
}

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    openModal();
  });
});

closeModalButton.addEventListener('click', closeModal);

window.addEventListener('click', e => {
  if (e.target === contactModal) {
    closeModal();
  }
});

// const skillNumber = document.querySelector('.skill__number');
// let counter = 0;

// function animateNumber() {
//   if (counter < 65) {
//     counter += 0.05;
//     skillNumber.innerHTML = Math.floor(counter) + '%';
//     requestAnimationFrame(animateNumber);
//   }
// }

// const stacksSection = document.querySelector('.stacks');
// const circle = document.getElementById('circle');

// window.addEventListener('scroll', () => {
//   const sectionPos = stacksSection.getBoundingClientRect().top;
//   const screenPos = window.innerHeight;

//   if (sectionPos < screenPos) {
//     animateNumber();
//     circle.classList.add('animate');
//   }
// });

const skillNumber = document.querySelector('.skill__number');
let start = null;
const endValue = 65;
const duration = 2000; // 2 секунди

function animateNumber(timestamp) {
  if (!start) start = timestamp;

  const progress = timestamp - start;
  const percentage = Math.min(progress / duration, 1);
  const currentValue = Math.floor(percentage * endValue);

  skillNumber.innerHTML = currentValue + '%';

  if (percentage < 1) {
    requestAnimationFrame(animateNumber);
  }
}

const stacksSection = document.querySelector('.stacks');
const circle = document.getElementById('circle');

window.addEventListener('scroll', () => {
  const sectionPos = stacksSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight;

  if (sectionPos < screenPos) {
    requestAnimationFrame(animateNumber);
    circle.classList.add('animate');
  } else {
    start = null;
    circle.classList.remove('animate');
  }
});
