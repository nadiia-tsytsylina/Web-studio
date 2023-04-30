// import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  form: document.querySelector('.js-speaker-form'),
  name: document.querySelector('#name'),
  tel: document.querySelector('#tel'),
  email: document.querySelector('#email'),
  comment: document.querySelector('#comment'),
  policy: document.querySelector('#policy'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.form.addEventListener('submit', onFormSubmit);

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}

function onFormSubmit(e) {
  e.preventDefault();
  if (refs.policy.checked === false) {
    alert('Please check the Policy');
  } else if (
    refs.name.value === '' ||
    refs.tel.value === '' ||
    refs.email.value === ''
  ) {
    alert('Please fill in the required fields');
  } else {
    alert('Thank you for leaving your contacts. We will call you back soon');
    refs.form.reset();
    toggleModal();
  }
}
