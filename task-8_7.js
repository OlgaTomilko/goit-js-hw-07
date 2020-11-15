// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и
// нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const input = document.querySelector('div#controls > input');
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxes = document.querySelector('div#boxes');
let inputAmount = 0;
let array = [];

input.addEventListener('input', onInput);
renderBtn.addEventListener('click', () => createBoxes(inputAmount));
destroyBtn.addEventListener('click', destroyBoxes);

function onInput() {
  inputAmount = input.value;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    let item = document.createElement('div');
    item.id = 'box';
    item.style.backgroundColor = getColor();
    item.style.width = `${30 + 10 * i}px`;
    item.style.height = `${30 + 10 * i}px`;
    item.style.marginBottom = '10px';
    array.push(item);
  }
  boxes.append(...array);
}

function destroyBoxes() {
  inputAmount = 0;
  input.value = '';
  array = [];

  const boxAll = document.querySelectorAll('#box');

  boxAll.forEach(element => {
    element.remove();
  });
}

function getColor() {
  const randomBetween = (min, max) =>
    min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  const rgb = `rgb(${r},${g},${b})`;
  return rgb;
}
