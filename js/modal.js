const openModalButtons = document.querySelectorAll('.open-modal-button');
const closeModalButton = document.querySelector('#modal__close-btn');
const contactModal = document.querySelector('#contactModal');

const outsideClickHandler = e => {
  console.log('click', e.target);
  if (e.target === contactModal) {
    console.log('click', e.target);
    closeModal();
  }
};

const escapeKeyHandler = e => {
  console.log(e.key);
  if (e.key === 'Escape') {
    closeModal();
  }
};

const openModal = () => {
  contactModal.classList.remove('is-hidden');
  document.addEventListener('click', outsideClickHandler);
  document.addEventListener('keydown', escapeKeyHandler);
};

const closeModal = () => {
  contactModal.classList.add('is-hidden');
  document.removeEventListener('click', outsideClickHandler);
  document.removeEventListener('keydown', escapeKeyHandler);
};

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    openModal();
  });
});

closeModalButton.addEventListener('click', closeModal);
