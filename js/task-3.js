'use strict';

const buttonRef = document.querySelector('.run-button-3');

buttonRef.addEventListener('click', function() {
  const findBestEmployee = function(employees) {
    const entries = Object.entries(employees);
    let bestWorker = entries[0];
    /* Можно было разделить на две переменные, 
     и потом к ним присваивать,
     но так мне показалось читабельнее */

    // eslint-disable-next-line no-restricted-syntax
    for (const entry of entries) {
      if (bestWorker[1] < entry[1]) {
        // Сравниваем кол-во задач, которое всегда у нас под индексом [1].
        bestWorker = entry;
      }
    }
    return `Самый продуктивный работник: ${bestWorker[0]}`;
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
