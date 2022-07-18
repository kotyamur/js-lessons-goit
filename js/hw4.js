// 4/48

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//       const allPizzas = pizzaPalace.pizzas;
//       if (allPizzas.includes(pizzaName)) {
//           console.log(onSuccess(pizzaName));
//           return onSuccess(pizzaName);
//       }
//       console.log(onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`));
//       return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//   },
// };

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// 5/48

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }

//   orderedItems.forEach(orderedItem => (totalPrice += orderedItem));

//   return totalPrice;
// }

// 6/48

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// }

// 7/48

// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }

//   firstArray.forEach(el => {
//     if (secondArray.includes(el)) {
//       commonElements.push(el);
//     }
//   });

//   return commonElements;
// }

// 8/48

// явний возрат

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };

// 9/48
// неявний возрат

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// 10/48

// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => {
//     totalPrice += item;
//   });

//   return totalPrice;
// };

// 13/48

// function changeEven(numbers, value) {
//   const newNumbers = [...numbers];
//   for (let i = 0; i < newNumbers.length; i += 1) {
//     if (newNumbers[i] % 2 === 0) {
//       newNumbers[i] = newNumbers[i] + value;
//     }
//   }
//   return newNumbers;
// }

// 20/48

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction', 'mysticism'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism', 'adventure'],
//   },
// ];
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);

// 25/48

// const getFriends = users => {
//   return users
//     .flatMap(user => user.friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index);
// };

// 34/48

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((acc, el) => acc + el, 0);

// const averagePlayTime = totalPlayTime / playtimes.length;

// 35/48

// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce(
//   (acc, player) => acc + player.playtime / player.gamesPlayed,
//   0
// );

// 39/48

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// 40/48

// const authors = [
//   'Tanith Lee',
//   'Bernard Cornwell',
//   'Robert Sheckley',
//   'Fyodor Dostoevsky',
//   'Howard Lovecraft',
// ];

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// 41/48

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((firstAutor, secondAutor) =>
//   firstAutor.author.localeCompare(secondAutor.author)
// );

// const sortedByReversedAuthorName = [...books].sort((firstAutor, secondAutor) =>
//   secondAutor.author.localeCompare(firstAutor.author)
// );

// const sortedByAscendingRating = [...books].sort(
//   (firstRating, secondRating) => firstRating.rating - secondRating.rating
// );

// const sortedByDescentingRating = [...books].sort(
//   (firstRating, secondRating) => secondRating.rating - firstRating.rating
// );

// 45/48

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = [...books]
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .sort((a, b) => a.localeCompare(b));

// 47/48

// const getSortedFriends = users => {
//   return [...users]
//     .reduce((acc, user) => [...acc, ...user.friends], [])
//     .filter((el, index, array) => array.indexOf(el) === index)
//     .sort((a, b) => a.localeCompare(b));
// };

// 48/48

// const getTotalBalanceByGender = (users, gender) => {
//   return users.filter(user => user.gender === gender).reduce((acc, user) => acc + user.balance, 0);
// };

/**
 * Example 1 - Коллбек функции
 * Напишите следующие функции:
 * createProduct(obj, callback) - 
 * принимает объект товара без id, а также колбек. 
 * Функция создаёт обьект товара, 
 * добавляя ему уникальный идентификатор в свойство id и 
 * вызывает колбек передавая ему созданный обьект.
 * 
 * logProduct(product) - коллбек принимающий обьект продукта 
 * и логирующий его в консоль
 * logTotalPrice(product) - коллбек принимающий обьект продукта 
 * и логирующий общую стоимость товара в консоль
 */
// const p = {
//     name: 'iPhone',
//     price: 1000,
//     count: 10
// }
// const createProduct = (obj, callback) => {
//     const product = {
//       ...obj,
//       id: Math.random(),
//     };
//     callback(product);
// };
// const logProduct = product => {
//     console.log(product);
// };
// // const logTotalPrice = product => {
// //   console.log(product.price * product.count);
// // };
// const logTotalPrice = ({price, count}) => {
//   console.log(price * count);
// };

// createProduct(p, logProduct)
// createProduct(p, logTotalPrice)

/**
 * Example 2
 * Напишите функцию аналог метода forEach
 * Он должен принимать массив и callback функцию 
 * которая будет вызываться для каждого элемента массива
 */
// const users = [
//     { name: 'Denis', age: 33 },
//     { name: 'Dima', age: 46 }
// ]
// const forEach = (arr, callback) => {
//     for (let i = 0; i < arr.length; i += 1) {
//       callback(arr[i], i, arr);
//     }
// }

// const forEachCallback = (element, index, array) => {
//     console.log(element);
//     console.log(index);
//     console.log(array);
// };
// forEach(users, forEachCallback)

/**
 *  Example 3 - Коллбек функции
 * Напишите функцию each(array, callback), 
 * которая первым параметром ожидает массив, а вторым - функцию, 
 * которая применится к каждому элементу массива. 
 * Функция each должна вернуть новый массив, 
 * элементами которого будут результаты вызова коллбека.
*/
// const users = [
//   { name: 'Denis', age: 33 },
//   { name: 'Dima', age: 46 },
// ];

// const each = (arr, callback) => {
//     const newArr = [];
//     for (let i = 0; i < arr.length; i += 1) {
//         const callbackResult = callback(arr[i], i, arr);
//         newArr.push(callbackResult);
//     }
//     return newArr;
// }

// const getName = (user) => {
//     return user.name;
// }

// console.log(each(users, getName));

/**
 * Example 4 - Коллбек функции
 * Добавьте объекту account методы 
 * withdraw(amount, onSuccess, onError) и 
 * deposit(amount, onSuccess, onError), 
 * где первый параметр это сумма операции, а второй и третий - колбеки.
 * Метод withdraw вызывает onError если amount больше 
 * TRANSACTION_LIMIT или this.balance, 
 * и onSuccess в противном случае.
 * Метод deposit вызывает onError если amount больше 
 * TRANSACTION_LIMIT или меньше либо равен нулю, 
 * и onSuccess в противном случае.
 */

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,

//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT || amount <= 0) {
//         return onError('Amount error')
//     }

//     this.balance += amount

//     onSuccess(this.balance)
//   },

//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT || amount > this.balance) {
//         return onError('Amount error');
//     }

//     this.balance -= amount
//     onSuccess(this.balance);
//   }
// }

// const onSuccess = (balance) => console.log('onSuccessHandler', balance)
// const onError = (error) => console.error('onErrorHandler', error)

// account.deposit(2000, onSuccess, onError)
// account.deposit(1000, onSuccess, onError)


const users = [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

// # Завдання 1

// Отримати масив імен всіх користувачів (поле `name`).

// const getUserNames = users => {
//     return users.map(user => user.name);
// };
// console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// # Завдання 2

// Отримати масив об'єктів користувачів за кольором очей (поле `eyeColor`).

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor === color)
// };
// console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]

// # Завдання 3

// Отримати масив імен користувачів за статтю (поле `gender`).

// const getUsersWithGender = (users, gender) => {
//   return users.filter(user => user.gender === gender).map(user => user.name)
// };
// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// # Завдання 4

// Отримати масив тільки неактивних користувачів (поле `isActive`).

// const getInactiveUsers = users => {
//   return users.filter(user => !user.isActive)
// };
// console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]

// # Завдання 5

// Отримати користувача (не масив) по `email` (поле `email`, він унікальний).

// const getUserWithEmail = (users, email) => {
//   return users.find(user => user.email === email)
// };
// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}

// # Завдання 6

// Отримати масив користувачів, які потрапляють у вікову категорію від `min` до
// `max` років (поле `age`).

// const getUsersWithAge = (users, min, max) => {
//   return users.filter(user => user.age > min && user.age < max)
// };
// console.log(getUsersWithAge(users, 20, 30)); // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]
// console.log(getUsersWithAge(users, 30, 40));
// // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]

// # Завдання 7

// Отримати загальну суму балансу (поле `balance`) всіх користувачів.

// const calculateTotalBalance = users => {
//   return users.reduce((acc, user) => acc + user.balance, 0)
// };
// console.log(calculateTotalBalance(users)); // 20916

// # Завдання 8

// Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.

// const getUsersWithFriend = (users, friendName) => {
//     return users.reduce((acc, user) => {
//       if (user.friends.includes(friendName)) {
//         acc.push(user.name);
//         }
//         return acc;
//     }, []);
// };
// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// # Завдання 9

// Масив імен (поле `name`) людей, відсортованих в залежності від кількості їх
// друзів (поле `friends`)

// const getNamesSortedByFriendsCount = users => {
//   return [...users].sort((a, b) => a.friends.length - b.friends.length)
// .map(user => user.name);
// };
// console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// # Завдання 10

// Отримати масив всіх умінь всіх користувачів (поле `skills`), при цьому не
// має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному
// порядку.

// const getSortedUniqueSkills = users => {
//     return [...users]
//       .flatMap(user => user.skills)
//       .filter((el, index, array) => array.indexOf(el) === index)
//       .sort((a, b) => a.localeCompare(b));
// };
// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]