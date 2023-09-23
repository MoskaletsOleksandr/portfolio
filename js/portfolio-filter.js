const portfolioFilter = document.querySelector('.portfolio__filter');
const portfolioItems = document.querySelectorAll('.portfolio__item');
let currentButton = document.querySelector('.portfolio__filter-button--current');

const handleFilterBtnClick = e => {
  if (!e.target.classList.contains('portfolio__filter-button')) {
    return;
  }

  const selectedButton = e.target;
  const category = selectedButton.textContent.toLowerCase().trim();

  currentButton.classList.remove('portfolio__filter-button--current');
  selectedButton.classList.add('portfolio__filter-button--current');
  currentButton = selectedButton;

  if (category === 'all') {
    portfolioItems.forEach(item => {
      item.style.display = 'block';
    });
  } else {
    portfolioItems.forEach(item => {
      if (item.classList.contains(category)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
};

portfolioFilter.addEventListener('click', handleFilterBtnClick);
