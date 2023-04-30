const subscibeBtn = document.querySelector('.footer-button');
const form = document.querySelector('.footer-form');
const input = document.querySelector('#footer-email');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  if (input.value === '') {
    alert('Please enter your email first');
  } else {
    alert(`Thank you for subscribig, ${input.value}`);
    form.reset();
  }
}
