/* eslint-disable no-restricted-syntax */

'use strict';

const buttonRef = document.querySelector('.run-button-7');

buttonRef.addEventListener('click', function() {
  /*
   * Типов транзацкий всего два.
   * Можно положить либо снять деньги со счета.
   */
  const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };

  /*
   * Каждая транзакция это объект со свойствами: id, type и amount
   */

  const account = {
    // Текущий баланс счета
    balance: 0,

    // История транзакций
    transactions: [],

    /*
     * Метод создает и возвращает объект транзакции.
     */
    createTransaction(amount, type) {
      /*  const id = this.getRandomID();
      Немного поигрался с генератором ID, выключен для удобства проверки.
    Включать на свой страх и риск :)
    */
      const id = `${this.transactions.length * 10}d`;
      console.log('Транзакция успешна!');
      console.log('ID этой транзакции:', id);
      console.log('==========================================================');
      return {
        amount,
        type,
        id,
      };
    },

    /*
     * Метод отвечающий за добавление суммы к балансу.
     */
    deposit(amount) {
      this.transactions.push(
        this.createTransaction(amount, Transaction.DEPOSIT),
      );
      this.balance += amount;
    },

    /*
     * Метод отвечающий за снятие суммы с баланса.
     */
    withdraw(amount) {
      if (amount > this.balance) {
        console.log('Недостаточно денег для осуществления транзакции!');
        console.log(
          '==========================================================',
        );
        return;
      }
      this.transactions.push(
        this.createTransaction(amount, Transaction.WITHDRAW),
      );
      this.balance -= amount;
    },

    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
      return `Ваш баланс: ${this.balance} (долларов конечно же 💸)
==========================================================`;
    },

    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {
      for (const transaction of this.transactions) {
        // Перебираем массив, который содержит объекты
        if (transaction.id === id) {
          return transaction;
        }
      }
      return `Не найдено транзакции с таким ID
==========================================================`;
    },

    /* Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {
      let totalTransactionSum = 0;
      let totalTransactionNubmer = 0;
      for (const transaction of this.transactions) {
        // Перебираем массив, который содержит объекты
        if (transaction.type === type) {
          totalTransactionNubmer += 1;
          totalTransactionSum += transaction.amount;
          // Добавляем к общей сумме транзакций сумму текущей
        }
      }
      if (totalTransactionSum === 0) {
        return 'Такой транзакции не найдено!';
      }
      // Исключаем отсуствие какой-либо транзакции(может потом добавим переводы между счетами :) )
      return `Было выполнено ${totalTransactionNubmer} транзакций "${type}" на общую сумму ${totalTransactionSum}
==========================================================`;
    },

    getRandomID() {
      let id = Math.floor(Math.random() * (1679615 - 0 + 1)) + 0;
      for (const transaction of this.transactions) {
        do {
          id = Math.floor(Math.random() * (1679615 - 0 + 1)) + 0;
        } while (transaction.id === id && id === 0);
      }
      return id.toString(36);
    },
  };

  // Проверяем работу скрипта
  account.deposit(20);
  account.withdraw(10);
  account.withdraw(10);
  account.withdraw(10);
  account.deposit(30);
  console.log(account.getBalance());
  console.log(account.getTransactionTotal('deposit'));
  console.log(account.getTransactionTotal('withdraw'));
  console.table(account.transactions);
  console.log(account.getTransactionDetails('0d'));
  console.log(account.getTransactionDetails('0123d'));
});
