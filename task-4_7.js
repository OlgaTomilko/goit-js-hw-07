//Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

//Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const buttons = document.querySelectorAll('button');
const buttonIncrement = buttons[1];
const buttonDecrement = buttons[0];
const htmlValue = document.querySelector('#value');

buttonDecrement.addEventListener('click', decremenet);
buttonIncrement.addEventListener('click', incremenet);

let value = 0;

function decremenet() {
    value -= 1;
    
     render();
    }
    
    function incremenet() {
    value += 1;
    
     render();
     }
    
     function render() {
    htmlValue.textContent = value;
     }




