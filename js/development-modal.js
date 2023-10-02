const developmentModal = document.querySelector('#developmentModal');
const closeModalButton = document.querySelector('#development-modal__close-btn');

const outsideClickHandler = e => {
  if (e.target === developmentModal) {
    closeModal();
  }
};

const escapeKeyHandler = e => {
  if (e.key === 'Escape') {
    closeModal();
  }
};

const openModal = () => {
  developmentModal.classList.remove('is-hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('click', outsideClickHandler);
  document.addEventListener('keydown', escapeKeyHandler);
};

const closeModal = () => {
  developmentModal.classList.add('is-hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('click', outsideClickHandler);
  document.removeEventListener('keydown', escapeKeyHandler);
  localStorage.setItem('modalClosed', 'true');
};

closeModalButton.addEventListener('click', closeModal);

const isModalClosed = localStorage.getItem('modalClosed');
if (!isModalClosed) {
  setTimeout(openModal, 10000);
} else {
  setTimeout(openModal, 180000);
}
