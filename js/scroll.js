const header = document.querySelector('.header-js');
const headerHeight = header.offsetHeight;
const scrollThreshold = headerHeight / 2;

const handleScroll = () => {
  if (window.scrollY > scrollThreshold) {
    header.classList.add('header--scroll');
  } else {
    header.classList.remove('header--scroll');
  }
};

window.addEventListener('scroll', handleScroll);
