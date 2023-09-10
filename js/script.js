import { mobMenuOpen, menuContainer, mobMenuClose } from './mob-menu.js';
import { portfolioSliderBlock, portfolioSlider } from './portfolio-slider.js';
import { initPortfolioFilter } from './portfolioFilter.js';
import { handleScroll } from './scroll.js';
import { testimonialSliderBlock, testimonialSlider } from './testimonial-slider.js';

window.addEventListener('scroll', handleScroll);

initPortfolioFilter();

testimonialSliderBlock.addEventListener('mouseenter', () => {
  testimonialSlider.autoplay.stop();
});

testimonialSliderBlock.addEventListener('mouseleave', () => {
  testimonialSlider.autoplay.start();
});

portfolioSliderBlock.addEventListener('mouseenter', () => {
  portfolioSlider.autoplay.stop();
});

portfolioSliderBlock.addEventListener('mouseleave', () => {
  portfolioSlider.autoplay.start();
});

const openModalButtons = document.querySelectorAll('.open-modal-button');
const closeModalButton = document.querySelector('#modal__close-btn');
const contactModal = document.querySelector('#contactModal');

// Відкриття модального вікна
function openModal() {
  contactModal.classList.remove('is-hidden');
}

// Закриття модального вікна
function closeModal() {
  contactModal.classList.add('is-hidden');
}

// Обробник кліку на кнопках відкриття модального вікна
openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    openModal();
  });
});

// Обробник кліку на кнопці закриття
closeModalButton.addEventListener('click', closeModal);

// Обробник кліку поза модальним вікном (якщо потрібно)
window.addEventListener('click', e => {
  if (e.target === contactModal) {
    closeModal();
  }
});
