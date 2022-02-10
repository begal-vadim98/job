'use strict'
const myEventsFunction = function () {
  const btn = document.getElementById('btn'),
    inputTypeText = document.querySelector('.controls  input[type=text] '),
    inputTypeRange = document.querySelector('.controls  input[type=range] '),
    rangeSpan = document.querySelector('#range-span'),
    square = document.querySelector('#square'),
    circle = document.querySelector('#circle'),
    eBtn = document.querySelector('#e_btn');

  // Функция смены фона у квадрата
  const changeColor = function () {
    if ((inputTypeText.value).trim()) {
      square.style.backgroundColor = inputTypeText.value;
      inputTypeText.value = "";
    }

  }

  // Функция изменения габаритов круга
  const changeRange = function () {
    rangeSpan.textContent = inputTypeRange.value + "%";
    circle.style.width = inputTypeRange.value + "%";
    circle.style.height = inputTypeRange.value + "%";
    circle.style.backgroundColor = `rgba(255,255,${inputTypeRange.value * 2})`;

  }

  // базовые найстройки страницы
  changeRange();
  // скрытие кнопки
  eBtn.style.display = "none";
  
  // Обработчики событий
  btn.addEventListener('click', changeColor);
  inputTypeRange.addEventListener('input', changeRange);
}

myEventsFunction();