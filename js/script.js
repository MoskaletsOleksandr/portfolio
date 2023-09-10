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
  console.log('====================================');
  console.log('portfolioSliderBlock mouseenter');
  console.log('====================================');
});

portfolioSliderBlock.addEventListener('mouseleave', () => {
  portfolioSlider.autoplay.start();
  console.log('====================================');
  console.log('portfolioSliderBlock mouseleave');
  console.log('====================================');
});

console.log('====================================');
console.log(portfolioSliderBlock);
console.log('====================================');
