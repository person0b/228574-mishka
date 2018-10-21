var modal = document.querySelector('.to-cart');
var button = document.querySelector('.button--to-cart');
var plug = document.querySelector('.to-cart__plug');

button.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.add('to-cart--open');
});

plug.addEventListener('click', function() {
  modal.classList.remove('to-cart--open');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27 && modal.classList.contains('to-cart--open')) {
    evt.preventDefault();
    modal.classList.remove('to-cart--open');
  }
});
