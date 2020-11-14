// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 
//'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента 
//(тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const categoriesRef = document.querySelectorAll('.item');
console.log(`В списке ${categoriesRef.length} категории`);

console.log(categoriesRef.forEach(element => {
const h2Ref = element.querySelector('h2');
const ulRef = element.querySelectorAll('li');
console.log(`Категория: ${h2Ref.textContent}`);
console.log(`Количество элементов: ${ulRef.length}`);
}));