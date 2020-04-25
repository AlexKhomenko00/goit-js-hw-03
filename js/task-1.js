'use strict';

const buttonRef = document.querySelector('.run-button-1');

buttonRef.addEventListener('click', function() {
  const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };

  // Проводим изменения над объектом
  user.moode = 'happy';
  user.hobby = 'skydiving 🪂';
  user.premium = 'false'; // Юзер не обрадуется :(

  // Перебираем объект
  const keys = Object.keys(user);

  // eslint-disable-next-line no-restricted-syntax
  for (const key of keys) {
    console.log(key, '-', user[key]);
  }
});
