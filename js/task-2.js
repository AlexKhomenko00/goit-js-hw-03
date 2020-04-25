'use strict';

const buttonRef = document.querySelector('.run-button-2');

buttonRef.addEventListener('click', function() {
  const countProps = function(obj) {
    const keys = Object.keys(obj);
    return `Колличество свойств в указанном объекте: ${keys.length}`;
    /* Можно так же было считать с помощью 
  Object.values или Object.entries() */
  };

  // Проверяем работу скрипта
  console.log(countProps({})); // 0

  console.log(countProps({ name: 'Mango', age: 2 })); // 2

  console.log(
    countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }),
  ); // 3

  console.log(
    countProps({ name: 'Mango', age: 20, hobby: 'html', premium: true }),
  );
});
