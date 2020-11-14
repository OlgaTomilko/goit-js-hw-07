//Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
//после чего вставит все li за одну операцию в список ul.ingredients. 
//Для создания DOM-узлов используй document.createElement().

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

let array = [];

 ingredients.forEach(element => {
      const item = document.createElement('li');
      item.textContent = element;
      array.push(item);
  });

 
const list = document.querySelector('ul#ingredients');
 list.append(...array);

 