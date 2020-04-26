/* eslint-disable no-restricted-syntax */

'use strict';

const buttonRef = document.querySelector('.run-button-6');

buttonRef.addEventListener('click', function() {
  const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
  ];

  const calculateTotalPrice = function(allProdcuts, productName) {
    let totalPrice = 0;
    for (const product of allProdcuts) {
      if (product.name === productName) {
        totalPrice = product.price * product.quantity;
      }
    }
    return totalPrice > 0
      ? `Стоимость заказа: ${totalPrice}`
      : 'Такой товар не найден :(';
  };

  // Проверяем работу скрипта
  console.log(calculateTotalPrice(products, 'Радар')); // 5200

  console.log(calculateTotalPrice(products, 'Дроид')); // 2800

  console.log(calculateTotalPrice(products, 'Захват'));

  console.log(calculateTotalPrice(products, 'Сканер'));

  console.log(calculateTotalPrice(products, 'Световой меч'));
});
