const allBtn = document.querySelector('#all-button');
const webBtn = document.querySelector('#web-site-button');
const appBtn = document.querySelector('#app-button');
const designBtn = document.querySelector('#design-button');
const marketingBtn = document.querySelector('#marketing-button');
const photoCards = document.querySelectorAll('.gallery-item');

allBtn.addEventListener('click', showAll);
webBtn.addEventListener('click', showWeb);
appBtn.addEventListener('click', showApp);
designBtn.addEventListener('click', showDesign);
marketingBtn.addEventListener('click', showMarketing);

function showAll(event) {
  event.preventDefault();
  photoCards.forEach((card) => {
    card.classList.remove('hide');
  });
}

function sortByCathegory(array, attribute) {
  array.forEach((card) => {
    card.classList.remove('hide');
    if (card.dataset.attribute !== attribute) {
      card.classList.add('hide');
    }
  });
}
function showWeb() {
  sortByCathegory(photoCards, 'web');
}
function showApp() {
  sortByCathegory(photoCards, 'app');
}
function showDesign() {
  sortByCathegory(photoCards, 'design');
}
function showMarketing() {
  sortByCathegory(photoCards, 'marketing');
}
