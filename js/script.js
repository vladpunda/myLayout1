document.addEventListener("DOMContentLoaded", function (event) {
  //бургер
  const headerBurger = document.querySelector('.header__burger');
  const headerheadWrapper = document.querySelector('.header__headwrapper');
  const headerWrapper = document.querySelector('.header__wrapper');
  const headerTel = document.querySelector('.header__contact');
  const headerItems = document.querySelectorAll('.header__item');
  if (headerBurger) {
    headerBurger.addEventListener("click", function (e) {
      headerBurger.classList.toggle('active');
      headerheadWrapper.classList.toggle('active');
      headerWrapper.classList.toggle('active');
      headerTel.classList.toggle('active');
    });
    for (let headerItem of headerItems) {
    headerItem.onclick = function() {
      headerBurger.classList.remove('active');
      headerheadWrapper.classList.remove('active');
      headerWrapper.classList.remove('active');
      headerTel.classList.remove('active');
    };
  };
  };

  // слайдер
  const Slides = document.querySelectorAll('.prepod__slider li');
const prepodSlider = document.querySelector('.prepod__slider');

let count = 0;
let width;
let conteiner;

function init() {
  width = Slides[1].offsetWidth;
  conteiner = document.querySelector('.conteiner').offsetWidth;
  slideRoll();
};
window.addEventListener('resize', init);
init();

const next = document.querySelector('.btn__slider-next').addEventListener('click', function () {
  count++;
  if (conteiner == 1000) {
    if (count >= Slides.length - 3) {
      count = 0;
    }
  }
  if (conteiner == 708) {
    if (count >= Slides.length - 2) {
      count = 0;
    }
  }
  if (count >= Slides.length) {
    count = 0;
  }
  slideRoll()
});
const prev = document.querySelector('.btn__slider-prev').addEventListener('click', function () {
  count--;
  if (conteiner == 1000) {
    if (count < 0) {
      count = Slides.length - 4;
    }
  }
  if (conteiner == 708) {
    if (count < 0) {
      count = Slides.length - 3;
    }
  }
  if (count < 0) {
    count = Slides.length - 1;
  }
  slideRoll()
});

function slideRoll() {
  prepodSlider.style.transform = 'translate(-' + count * width + 'px)';
};
});