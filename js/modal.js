const openModalButtons = document.querySelectorAll('.open-modal-button');
const closeModalButton = document.querySelector('#modal__close-btn');
const contactModal = document.querySelector('#contactModal');

const outsideClickHandler = e => {
  if (e.target === contactModal) {
    closeModal();
  }
};

const escapeKeyHandler = e => {
  if (e.key === 'Escape') {
    closeModal();
  }
};

const openModal = () => {
  contactModal.classList.remove('is-hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('click', outsideClickHandler);
  document.addEventListener('keydown', escapeKeyHandler);
};

const closeModal = () => {
  contactModal.classList.add('is-hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('click', outsideClickHandler);
  document.removeEventListener('keydown', escapeKeyHandler);
};

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    openModal();
  });
});

closeModalButton.addEventListener('click', closeModal);
