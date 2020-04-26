'use strict';

const buttonRef = document.querySelector('.run-button-3');

buttonRef.addEventListener('click', function() {
  const findBestEmployee = function(employees) {
    const keys = Object.keys(employees);
    const values = Object.values(employees);
    let bestWorker = 0; // Присваиваем индекс первого работника, как предположение
    let bestValue = values[0];

    // eslint-disable-next-line no-restricted-syntax
    for (const value of values) {
      if (bestValue < value) {
        // Сравниваем кол-во задач, которое всегда у нас под индексом [1].
        bestWorker = values.indexOf(value);
        bestValue = value;
      }
    }
    return `Самый продуктивный работник: ${keys[bestWorker]}`; // Ищем по индексу в масеве лучшего рабочего
  };

  // Проверяем работу скрипта
  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  ); // lorence

  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); // mango
  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  );
});
