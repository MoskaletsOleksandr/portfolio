const stacksSection = document.querySelector('.skills');
const skillNumbers = document.querySelectorAll('.skill__number');
const circles = document.querySelectorAll('.circle');

const countTo = skillNumber => {
  const target = skillNumber.dataset.number;
  const duration = 2000;
  const start = 0;
  const interval = 10;
  const steps = duration / interval;
  const increment = target / steps;

  let current = start;

  const counter = setInterval(() => {
    current += increment;

    if (current >= target) {
      clearInterval(counter);
      current = target;
    }

    const roundedValue = Math.floor(current);
    skillNumber.innerHTML = roundedValue + '%';
  }, interval);
};

// circles.forEach(circle => {
//   const dataNumber = circle.getAttribute('data-number');
//   circle.style.setProperty('--data-number', dataNumber);
// });

const handleScroll = () => {
  const sectionPos = stacksSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight;

  if (sectionPos < screenPos / 2) {
    skillNumbers.forEach(skillNumber => countTo(skillNumber));
    circles.forEach(circle => {
      const dataNumber = circle.getAttribute('data-number');
      circle.style.setProperty('--data-number', dataNumber);
      circle.classList.add('animate');
    });
    window.removeEventListener('scroll', handleScroll);
  }
};

window.addEventListener('scroll', handleScroll);
