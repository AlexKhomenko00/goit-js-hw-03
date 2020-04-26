'use strict';

const buttonRef = document.querySelector('.run-button-5');

buttonRef.addEventListener('click', function() {
  const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
  ];

  const getAllPropValues = function(arr, prop) {
    const objects = arr; // Можно было без создания переменной пустить arr в цикл, но так чуть понятнее.
    const searchedArray = [];
    // Перебираем массив с объектами

    // eslint-disable-next-line no-restricted-syntax
    for (const item of objects) {
      if (prop in item) {
        /* Сделал по вашему методу, спасибо за совет.
        Оно  как раз более универсальное, 
        так как вдруг кому-то специально нужно будет 
        undefined в свойстве объекта */
        searchedArray.push(item[prop]);
      }

      // if (item[prop] !== undefined) {
      //   /* Не совсем универсальное решение,
      //  но не знаю как еще добиться [] при отсуствии свойства в объекте */
      //   searchedArray.push(item[prop]);
      // }
    }
    return searchedArray;
  };

  // Проверяем работу скрипта
  console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

  console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

  console.log(getAllPropValues(products, 'category')); // []

  console.log(getAllPropValues(products, 'price'));
});
