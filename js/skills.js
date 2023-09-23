const skillNumbers = document.querySelectorAll('.skill__number');
const endValues = [85, 65, 75];

skillNumbers.forEach((skillNumber, index) => {
  let start = null;
  const endValue = endValues[index];
  const duration = 2000;

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
});

const stacksSection = document.querySelector('.stacks');
const circles = document.querySelectorAll('.circle');

window.addEventListener('scroll', () => {
  const sectionPos = stacksSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight;

  if (sectionPos < screenPos) {
    requestAnimationFrame(animateNumber);
    circles.forEach(circle => {
      circle.classList.add('animate');
    });
  } else {
    start = null;
    circles.forEach(circle => {
      circle.classList.remove('animate');
    });
  }
});
