'use strict'
const myEventsFunction = function () {
  const btn = document.getElementById('btn'),
    inputTypeText = document.querySelector('.controls  input[type=text] '),
    inputTypeRange = document.querySelector('.controls  input[type=range] '),
    rangeSpan = document.querySelector('#range-span'),
    square = document.querySelector('#square'),
    circle = document.querySelector('#circle'),
    eBtn = document.querySelector('#e_btn');

  const changeColor = function () {
    if ((inputTypeText.value).trim()) {
      square.style.backgroundColor = inputTypeText.value;
      inputTypeText.value = "";
    }

  }
  
  btn.addEventListener('click', changeColor);

  eBtn.style.display = "none";

  // input range
  rangeSpan.textContent = inputTypeRange.value;
  circle.style.width = inputTypeRange.value + "%";
  circle.style.height = inputTypeRange.value + "%";

  const changeRange = function () {
    rangeSpan.textContent = inputTypeRange.value;
    circle.style.width = inputTypeRange.value + "%";
    circle.style.height = inputTypeRange.value + "%";
    circle.style.backgroundColor = `rgba(255,255,${inputTypeRange.value})`;
  }
  inputTypeRange.addEventListener('input', changeRange);
}

myEventsFunction();