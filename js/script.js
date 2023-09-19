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

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const skillNumber = document.querySelector('.skill__number');
let counter = 0;

function animateNumber() {
  if (counter < 65) {
    counter += 0.6;
    skillNumber.innerHTML = Math.floor(counter) + '%';
    requestAnimationFrame(animateNumber);
  }
}

const animatedElements = document.querySelectorAll('.animated');

function checkElementsVisibility() {
  animatedElements.forEach(element => {
    if (isElementInViewport(element)) {
      animateNumber();
      // element.classList.add('animate'); // Додайте клас анімації, наприклад, 'animate'
    }
  });
}

// Викликайте функцію при завантаженні сторінки та при прокрутці
window.addEventListener('load', checkElementsVisibility);
window.addEventListener('scroll', checkElementsVisibility);
