'use strict';

const buttonRef = document.querySelector('.run-button-4');

buttonRef.addEventListener('click', function() {
  const countTotalSalary = function(employees) {
    const salaries = Object.values(employees);
    let totalSalary = 0;
    // eslint-disable-next-line no-restricted-syntax
    for (const salary of salaries) {
      totalSalary += salary;
    }
    return `Фонд оплаты труда: ${totalSalary} (надеюсь не тенге) `;
  };

  // Проверяем работу скрипта
  console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    }),
  ); // 330

  console.log(
    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    }),
  ); // 400
});
