// 16
// function countTotalSalary(salaries) {
//   let totalSalary = 0;

//   // const keys = Object.keys(salaries);
//   // for (const key of keys) {
//   //   totalSalary += salaries[key];
//   // }

//   const values = Object.values(salaries);
//   for (const value of values) {
//     totalSalary += value;
//   }
//   return totalSalary;
// }

// 17
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// 18
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
// }

// 19
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const productArr = [];
//   for (const product of products) {
//     if (product[propName]) {
//       productArr.push(product[propName]);
//     }
//   }
//   return productArr;
// }

// 20
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let totalPrice = 0;
//   for (const product of products) {
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//     }
//   }
//   return totalPrice;
// }

// 30
// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   return { completed, category, priority, ...data };
// }

// 31
// function add(...args) {
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// }

// 32
// function addOverNum(number, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > number) {
//       total += arg;
//     }
//   }
//   return total;
// }

// 33
// function findMatches(array, ...numbers) {
//   const matches = []; // Don't change this line
//   for (const num of array) {
//     for (const number of numbers) {
//       if (num === number) {
//         matches.push(number);
//       }
//     }
//   }
//   return matches;
// }

// 34
// const bookShelf = {
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
// };

// 35

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     const indexOfOldBook = this.books.indexOf(oldName);
//     this.books.splice(indexOfOldBook, 1, newName);
//   },
// };

// 36-40

// 1 variant

// const atTheOldToad = {
//   potions: [],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const potion = this.potions[i];

//       if (potionName === potion) {
//         this.potions.splice(i, 1);
//       }
//     }
//   },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const potion = this.potions[i];

//       if (oldName === potion) {
//         this.potions.splice(i, 1, newName);
//       }
//     }
//   },
// };

// 2 variant

// const atTheOldToad = {
//   potions: [],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
// };

// 41
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],

//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const potion = this.potions[i];

//       if (potionName === potion.name) {
//         this.potions.splice(i, 1);
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const potion = this.potions[i];

//       if (oldName === potion.name) {
//         potion.name = newName;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
// };

// atTheOldToad.addPotion({ name: 'Stone skin', price: 240 });
// atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 });
// atTheOldToad.getPotions();
// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
// atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion');

// task on lection

/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

// const cart = {
//     items: [],
//     getItems() {
//         return this.items;
//     },
//     add(product) {
//         for (const item of this.items) {
//             if (item.name === product.name) {
//                 item.quantity += 1;
//                 return;
//             }
//         }

//     const newProduct = {
//         ...product,
//         quantity: 1,
//     };

//     this.items.push(newProduct);
//   },
//     remove(productName) {
//         const { items } = this;

//         for (let i = 0; i < items.length; i += 1) {
//         const item = items[i];

//         if (productName === item.name) {
//             console.log('нашли такой продукт ', productName);
//             console.log('индекс: ', i);

//             items.splice(i, 1);
//         }
//         }
//     },
//     clear() {
//         this.items = [];
//     },
//     countTotalPrice() {
//         const { items } = this;
//         let total = 0;

//         for (const { price, quantity } of items) {
//             total += price * quantity;
//         }

//         return total;
//     },
//     increaseQuantity(productName) {
//         const { items } = this;

//         for (let i = 0; i < items.length; i += 1) {
//             const item = items[i];

//             if (productName === item.name) {
//             item.quantity += 1;
//             return;
//             }
//         }
//     },
//     decreaseQuantity(productName) {
//         const { items } = this;

//         for (let i = 0; i < items.length; i += 1) {
//             const item = items[i];
//             console.log(item);

//             if (productName === item.name) {
//                 item.quantity -= 1;
//                 if (item.quantity === 0) {
//                     items.splice(i, 1);
//                 }
//                 return;
//             }
//         }

//     },
// };

// console.log(cart.getItems());

// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍇', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });

// console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

// cart.remove('🍇');
// console.table(cart.getItems());

// // cart.clear();
// // console.log(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());

// --------HW 3--------

/*# Задание 1

Напиши скрипт, который, для объекта `user`, последовательно:

- добавляет поле `mood` со значением `'happy'`
- заменяет значение `hobby` на `'skydiving'`
- заменяет значение `premium` на `false`
- выводит содержимое объекта `user` в формате `ключ:значение` используя
  `Object.keys()` и `for...of`
*/
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };
// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;
// const keys = Object.keys(user);
// for (const key of keys) {
//     console.log(`${key}: ${user[key]}`);
// }

/** # Задание 2

Напиши функцию `countProps(obj)`, считающую кол-во свойств в объекте. Функция
возвращает число - количество свойств.*/

// const countProps = function(obj) {
//     const keys = Object.keys(obj);
//     return keys.length;
// const entries = Object.entries(obj);
// return entries.length;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

/**# Задание 3

Напиши функцию `findBestEmployee(employees)`, которая принимает объект
сотрудников и возвращает имя самого продуктивного (который выполнил больше всех
задач). Сотрудники и кол-во выполненых задач содержатся как свойства объекта в
формате `"имя":"кол-во задач"`. */

// const findBestEmployee = function(employees) {
//     const values = Object.values(employees);
//     const maxTask = Math.max(...values);
//     const keys = Object.keys(employees);
//     for (const key of keys) {
//         if (employees[key] === maxTask) {
//             return key;
//         }
//     }
// };

// const findBestEmployee = function (employees) {
//   const bestEmployee = [];
//   for (const employee of Object.entries(employees)) {
//     if (employee[1] > bestEmployee[1]) {
//       bestEmployee = employee;
//     }
//   }
//   return bestEmployee[0];
// };

// const findBestEmployee = function (employees) {
//     const keys = Object.keys(employees);
//     let max = 0;
//     let bestEmployee;
//     for (const key of keys) {
//         if (employees[key] > max) {
//             bestEmployeeTask = employees[key];
//             bestEmployee = key;
//         }
//     }
//     return bestEmployee;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   findBestEmployee({ann: 29, david: 35, helen: 1, lorence: 99,
//   }),
// ); // lorence

// console.log(
//   findBestEmployee({poly: 12, mango: 17,ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({lux: 147,david: 21, kiwi: 19,chelsy: 38,
//   }),
// ); // lux

/**# Задание 4

Напиши функцию `countTotalSalary(employees)` принимающую объект зарплат. Функция
считает общую сумму запрплаты работников и возращает ее. Каждое поле объекта,
передаваемого в функцию, имеет вид `"имя":"зарплата"`. */

// const countTotalSalary = function (employees) {
//     const values = Object.values(employees);
//     let totalSalary = 0;
//     for (const value of values) {
//         totalSalary += value;
//     }
//     return totalSalary;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({ mango: 100, poly: 150, alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({kiwi: 200, lux: 50, chelsy: 150,
//   }),
// ); // 400

/**# Задание 5

Напиши функцию `getAllPropValues(arr, prop)`, которая получает массив объектов и
имя свойства. Возвращает массив значений определенного свойства `prop` из
каждого объекта в массиве. */

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// // const getAllPropValues = (arr, prop) =>
// //   arr.reduce((propValues, part) => (part[prop] ? [...propValues, part[prop]] : propValues), []);

// const getAllPropValues = function (arr, prop) {
//     const propValues = [];

//     for (const item of arr) {
        
//       // if (item[prop]) {
//       //     propValues.push(item[prop]);
//       // }
//         if (item.hasOwnProperty(prop)) {
//           propValues.push(item[prop]);
//         }
//     }
//     return propValues;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []

/**# Задание 6

Напиши функцию `calculateTotalPrice(allProdcuts, productName)`, которая получает
массив объектов и имя продукта (значение свойства `name`). Возвращает общую
стоимость продукта (цена \* количество).

Вызовы функции для проверки работоспособности твоей реализации. */

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProducts, productName) {
//     let totalPrice = 0;
//     for (const product of allProducts) {

//         return product.name === productName ? product.price * product.quantity : 0;

//         if (product.name === productName) {
//             totalPrice = product.price * product.quantity;
//             break
//         }
//     }
//      return totalPrice;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроид')); // 2800

/**# Задание 7 - дополнительное, выполнять не обязательно

Напиши скрипт управления личным кабинетом интернет банка. Есть объект `account`
в котором необходимо реализовать методы для работы с балансом и историей
транзакций. */

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],
//   lastId: 0,

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {
//     let transaction = {};
//     transaction.id = this.lastId + 1;
//     this.lastId += 1;
//     transaction.type = type;
//     transaction.amount = amount;
//     return transaction;

        // 2 variant
        // return {
        //   id: this.transactions.length + 1,
        //   type,
        //   amount,
        // };
//   },

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//     deposit(amount) {
//         const newDeposit = this.createTransaction(amount, Transaction.DEPOSIT);
//         this.transactions.push(newDeposit);
//         this.balance += amount;
//     },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//         if (amount > this.balance) {
//             return 'снятие такой суммы не возможно, недостаточно средств';
//         }
//         const newWithdraw = this.createTransaction(amount, Transaction.WITHDRAW);
//         this.transactions.push(newWithdraw);
//         this.balance -= amount;
//     },

//   /*
//    * Метод возвращает текущий баланс
//    */
//     getBalance() {
//         return this.balance;
//     },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//     getTransactionDetails(id) {
//          let tr = null;
//         for (const transaction of this.transactions) {
//           if (transaction.id === id) {
//             tr = { ...transaction };
//              break
//           }
//         }
//        return tr;
//     },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//     getTransactionTotal(type) {
//         let total = 0;
//         for (const transaction of this.transactions) {
//           if (transaction.type === type) {
//             total += transaction.amount;
//           }
//         }
//         return total;
//     },
// };
// console.log(account.getBalance());
// account.deposit(100);
// console.log(account.getBalance());
// account.deposit(10);
// console.log(account.getBalance());
// account.withdraw(20);
// console.log(account.getBalance());
// account.withdraw(40);
// console.log(account.getBalance());

// console.log('Transaction 1: ');
// console.log(account.getTransactionDetails(1));
// console.log('Transaction 3: ');
// console.log(account.getTransactionDetails(3));
// console.log('Transaction 4: ');
// console.log(account.getTransactionDetails(4));

// console.log('Withdrawals: ' + account.getTransactionTotal(Transaction.WITHDRAW));
// console.log('Deposits: ' + account.getTransactionTotal(Transaction.DEPOSIT));

// lection
const arr = [1, 2, 3]
const arr2 = [...arr]
const [first, ...other] = arr
// console.log(first)
// console.log('other', other)

// Проблеми які вирішує деструктурізація
// Довгі ланцюжки доступу до властивостей
const user = {
    id: 1,
    firstName: 'Jacob',
    lastName: 'Mercer',
    email: 'j.mercer@mail.com',
    friendCount: 40,
    info: {
        work: "GoIt",
        place: {
            city: "Kharkiv",
            country: "Ukraine"
        }
    },
    balance: {
        amount: 500
    }
}

// const { info: { place: { city } } } = user

const { info: { work }, balance: { amount }} = user

// const work = user.info ? user.info.work : 'no work'
// const { info: { city, ...otherInfo } = {} } = user
// console.log(city)
// console.log(otherInfo)

// const { info } = user

// info.city = "Kiev"

// console.log(user)

// const arrOfUsers = [{ name: "Denis" }]
// const [{ name }] = arrOfUsers
// console.log(name)

// Об'єкт параметрів
// Копіювання Об'єктів, масивів
// Передача багатьох параметрів



// Example 1
// Перепиши функцию так, чтобы она принимала один объект параметров, 
// вместо набора независимых аргументов.

function calcBMI({ weight, height }) {
    const numericWeight = Number(weight.replace(',', '.'));
    const numericHeight = Number(height.replace(',', '.'));
    return Number((numericWeight / numericHeight ** 2).toFixed(1));
}
  
// Было
// console.log(calcBMI('88,3', '1.75'));
// console.log(calcBMI('68,3', '1.65'));
// console.log(calcBMI('118,3', '1.95'));

// Ожидается
// console.log(
//     calcBMI({
//       height: '1.75',
//       weight: '88,3',
//     }),
// );

// Example 2 Глубокая деструктуризация
// Перепиши функцию так, чтобы она принимала один объект параметров, 
// вместо набора независимых аргументов.  

function getBotReport(data) {
    const { companyName, bots: { repair, defence } } = data
    return `${companyName} has ${repair + defence} bots in stock`;
}
  
// Было
// console.log(getBotReport('Cyberdyne Systems', 150, 50));

// Ожидается
// console.log(
//     getBotReport({
//       companyName: 'Cyberdyne Systems',
//       bots: {
//         repair: 150,
//         defence: 50,
//       },
//     }),
// );


// Example 3 - spred
// Дополни функцию createContact(partialContact) так, 
// чтобы она возвращала новый объект контакта с 
// добавленными свойствами id и createdAt, 
// а также list со значением "default" 
// если в partialContact нет такого свойства.

function createContact(partialContact) {
    return {
        list: 'default',
        id: generateId(),
        createdAt: Date.now(),
        ...partialContact,
    }
}

// console.log(
//     createContact({
//         name: 'Mango',
//         email: 'mango@mail.com',
//         list: 'friends',
//     }),
// );
// console.log(
//     createContact({
//         name: 'Poly',
//         email: 'poly@hotmail.com',
//     }),
// );

function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}   

// Example 4 rest
// Напиши функцию transformUsername(user) так, 
// чтобы она возвращала новый обьект со свойством fullName, 
// вместо firstName и lastName.

function transformUsername({ firstName, lastName, ...otherInfo }) {
    return {
        fullName: `${firstName} ${lastName}`,
        ...otherInfo
    }
}
  
//   console.log(
//     transformUsername({
//       id: 1,
//       firstName: 'Jacob',
//       lastName: 'Mercer',
//       email: 'j.mercer@mail.com',
//       friendCount: 40,
//     }),
//   );