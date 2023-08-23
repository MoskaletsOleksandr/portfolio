export function initPortfolioFilter() {
  const filterButtons = document.querySelectorAll('.portfolio__filter-button');
  const portfolioItems = document.querySelectorAll('.portfolio__item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.textContent.toLowerCase();
      console.log(category);

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
    });
  });

  portfolioItems.forEach(item => {
    item.style.display = 'block';
  });
}
