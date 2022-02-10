'use strict'
const myEventsFunction = function () {

  const btn = document.getElementById('btn'),
    inputTypeText = document.querySelector('.controls  input[type=text] '),
    inputTypeRange = document.querySelector('.controls  input[type=range] '),
    rangeSpan = document.querySelector('#range-span'),
    square = document.querySelector('#square'),
    circle = document.querySelector('#circle'),
    boxColor = document.querySelector('.box-color'),
    boxColorItem = [],
    eBtn = document.querySelector('#e_btn');

  const functionForColor = function () {
    const arrColor = ['#FBCEB1', '#98FB98', '#957B8D', '#755C48', '#FDD9B5', '#C34D0A', '#ABCDEF', '#B5B8B1', '#A8E4A0', '#FFCA86', '#F19CBB', '#9966CC'];

    arrColor.forEach((elem) => {
      let span = document.createElement('span');

      span.classList.add('box-color__item');

      span.style.backgroundColor = elem;
      boxColor.append(span);
      boxColorItem.push(span);

    })

  }

  const functionChangeBG = function (e) {
    const target = e.target;
    boxColorItem.forEach((elem) => {
      elem.classList.remove('active');
      if (target === elem) {
        square.style.backgroundColor = elem.style.backgroundColor;
        elem.classList.add('active');
      }
    })
  }

  // Функция смены фона у квадрата
  const changeColor = function () {
    if ((inputTypeText.value).trim()) {
      square.style.backgroundColor = inputTypeText.value;
      inputTypeText.value = "";
    }
    boxColorItem.forEach((elem) => {
      elem.classList.remove('active');
    })

  }

  // Функция изменения габаритов круга
  const changeRange = function () {
    rangeSpan.textContent = inputTypeRange.value + "%";
    circle.style.width = inputTypeRange.value + "%";
    circle.style.height = inputTypeRange.value + "%";
    circle.style.backgroundColor = `rgba(255,255,${inputTypeRange.value * 2})`;

  }

  // базовые найстройки страницы
  functionForColor();
  changeRange();
  // скрытие кнопки
  eBtn.style.display = "none";

  // Обработчики событий
  boxColor.addEventListener('click', functionChangeBG);
  btn.addEventListener('click', changeColor);
  inputTypeRange.addEventListener('input', changeRange);
}

myEventsFunction();