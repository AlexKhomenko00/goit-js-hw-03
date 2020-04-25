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
      /* const id = this.getRandomID(); 
    Немного поигрался с генератором ID, выключен для удобства проверки.
    Включать на свой страх и риск :)
    */
      const id = `${this.transactions.length * 10}d`;
      this.transactions.push({
        amount,
        type,
        id,
      });
      console.log('Транзакция успешна!');
      console.log('ID этой транзакции:', id);
      console.log('==========================================================');
    },

    /*
     * Метод отвечающий за добавление суммы к балансу.
     */
    deposit(amount) {
      this.createTransaction(amount, Transaction.DEPOSIT);
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
      this.createTransaction(amount, Transaction.WITHDRAW);
      this.balance -= amount;
    },

    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
      console.log('Ваш баланс:', this.balance, '(долларов конечно же 💸)');
      console.log('==========================================================');
    },

    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {
      for (const transaction of this.transactions) {
        // Перебираем массив, который содержит объекты
        const values = Object.values(transaction);
        // Получаем массив, содержащий значения свойств каждого объекта в массиве
        for (const value of values) {
          if (Array(value).includes(id)) {
            const transactionToFind = transaction;
            console.log(transactionToFind);
            console.log(
              '==========================================================',
            );
            return;
          }
        }
      }
      console.log('Такого ID не найдено!');
      console.log('==========================================================');
    },

    /* Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {
      let totalTransactionSum = 0;
      let totalTransactionNubmer = 0;
      for (const transaction of this.transactions) {
        // Перебираем массив, который содержит объекты
        const values = Object.values(transaction);
        // Получаем массив, содержащий значения свойств каждого объекта в массиве
        for (const value of values) {
          if (Array(value).includes(type)) {
            totalTransactionNubmer += 1;
            totalTransactionSum += transaction.amount;
            // Добавляем к общей сумме транзакций сумму текущей
          }
        }
      }
      if (totalTransactionSum === 0) {
        console.log('Такой транзакции не найдено!');
        console.log(
          '==========================================================',
        );
        return;
      }
      // Исключаем отсуствие какой-либо транзакции(может потом добавим переводы между счетами :) )

      console.log(
        `Было выполнено ${totalTransactionNubmer} транзакций "${type}" на общую сумму ${totalTransactionSum}`,
      );
      console.log('==========================================================');
    },

    getRandomID() {
      let id = Math.floor(Math.random() * (1679615 - 0 + 1)) + 0;
      for (const transaction of this.transactions) {
        // Перебираем массив, который содержит объекты
        const values = Object.values(transaction);
        // Получаем массив, содержащий значения свойств каждого объекта в массиве
        for (const value of values) {
          do {
            id = Math.floor(Math.random() * (1679615 - 0 + 1)) + 0;
            return id.toString(36);
          } while (Array(value).includes(id) && id === 0);
        }
      }
      return id.toString(36);
    },
  };

  // Проверяем работу скрипта
  account.deposit(20);
  account.withdraw(10);
  account.getBalance();
  account.getTransactionTotal('deposit');
  account.getTransactionTotal('withdraw');
  console.table(account.transactions);
});
