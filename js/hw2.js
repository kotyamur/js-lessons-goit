// aututasks
// 12
// function makeStringFromArray(array, delimeter) {
//     let string;
//     string = array.join(delimeter);
//     return string;
//   }
// 13
// function slugify(title) {
//     // const normaliseTitle = title.toLowerCase();
//     // const splitTitle = normaliseTitle.split(" ");
//     // const slug = splitTitle.join("-");
//     const slug = title.toLowerCase().split(" ").join("-");
//     return slug;
//   }
// 20
// function calculateTotalPrice(order) {
//     let total = 0;
//     for (let i = 0; i < order.length; i += 1) { // Change this line
//     total += order[i];
//     }
//     return total;
//   }
// task 21 mod2
// function findLongestWord(string) {
//     const words = string.split(" ");
//     let longestWord = words[0];
//     for (const word of words) {
//       if (longestWord.length < word.length) {
//         longestWord = word;
//       }
//     }
//     return longestWord;
// }
// findLongestWord("Google do a roll");
// 23
// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // for (let i = 0; i < numbers.length; i += 1) {
//     //     const number = numbers[i];
//     //     if (number > value) {
//     //         filteredNumbers.push(number);
//     //     }
//     // }

//     for (let number of numbers) {
  
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     }
//     return filteredNumbers;
// }
  

// 24
// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];
  
//     return fruits.includes(fruit)
//     ? true
//     : false; // Change this line
// }
// 25
// function getCommonElements(array1, array2) {
//     const comonElements = [];
//     for (let number of array1) {
//       if (array2.includes(number)) {
//           comonElements.push(number);
//       }
//     }
//   return comonElements
// }
// 29
// function getEvenNumbers(start, end) {
//    let evenNumbers = [];
//    for (let i = start; i <= end; i += 1) {
//         if (i % 2 === 0) {
//             evenNumbers.push(i);
//         }
//    }
//    return evenNumbers;
// }
// 30
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// 31
// function findNumber(start, end, divisor) {
//     for (let i = start; i < end; i += 1) {
//       if (i % divisor === 0) {
//         return i;
//       }
//     }
// }
// 32
// function includes(array, value) {
//     for (number of array) {
//       if (number == value) {
//         return true;
//       }
//     }
//     return false;
// }
/*# Задание 1

Напиши функцию `logItems(array)`, которая получает массив и использует цикл
`for`, который для каждого элемента массива будет выводить в консоль сообщение в
формате `[номер элемента] - [значение элемента]`.

Нумерация должна начинаться с `1`. К примеру для первого элемента массива
`['Mango', 'Poly', 'Ajax']` с индексом `0` будет выведено `'1 - Mango'`, а для
индекса `2` выведет `'3 - Ajax'`.*/

// const logItems = function (array) {
//     for (number of array) {
//         console.log(`${array.indexOf(number) + 1} - ${number}`);
//     }
// };

// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

/*# Задание 2

Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию
`calculateEngravingPrice(message, pricePerWord)` принимающую строку (в строке
будут только слова и пробелы) и цену гравировки одного слова, и возвращающую
цену гравировки всех слов в строке.*/

// const calculateEngravingPrice = function(message, pricePerWord) {
//     const splitMessage = message.split(' ');
//     return pricePerWord * splitMessage.length;
// };

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80
// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// ); // 160
// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// ); // 240
// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// ); // 120

/*# Задание 3

Напиши фукцнию `findLongestWord(string)`, которая принимает параметром
произвольную строку (в строке будут только слова и пробелы) и возвращает самое
длинное слово в этой строке.*/
// const findLongestWord = function (string) {
//     const splitString = string.split(' ');
//     let longestWord = splitString[0];
//     for (element of splitString) {
//         if (element.length > longestWord.length) {
//           longestWord = element;
//         }
//     }
//     return longestWord;
// };

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'

/*# Задание 4

Напиши функцию `formatString(string)` которая принимает строку и форматирует ее
если необходимо.

- Если длина строки не превышает `40 символов`, функция возвращает ее в исходном
  виде.
- Если длина больше `40 символов`, то функция обрезает строку до 40-ка символов
  и добавляет в конец строки троеточие `'...'`, после чего возвращает
  укороченную версию. */

// const formatString = function(string) {
//     const splitString = string.split('');
//     // console.log(splitString);
//     let formatedString;
//     if (splitString.length > 40) {
//         formatedString = `${splitString.slice(0, 40).join('')} ...`;
//         // console.log(formatedString);
//         return formatedString;
//     }
//     return string;
// };

// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка

// console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//   ),
// );
// // вернется форматированная строка

/*# Задание 5

Напиши функцию `checkForSpam(message)`, принимающую 1 параметр `message` -
строку. Функция проверяет ее на содержание слов `spam` и `sale`. Если нашли
зарещенное слово то функция возвращает `true`, если запрещенных слов нет функция
возвращает `false`. Слова в строке могут быть в произвольном регистре. */

// const checkForSpam = function (message) {
//     let result;
//     const normalizedToLowerCaseMessage = message.toLowerCase()
//     result = normalizedToLowerCaseMessage.includes("spam") || normalizedToLowerCaseMessage.includes("sale");
//     return result;
// };

// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

/*# Задание 6

Напиши скрипт со следующим функционалом:

- При загрузке страницы пользователю предлагается в `prompt` ввести число. Ввод
  сохраняется в переменную `input` и добавляется в массив чисел `numbers`.
- Операция ввода числа пользователем и сохранение в массив продолжается до тех
  пор, пока пользователь не нажмет `Cancel` в `prompt`.
- После того как пользователь прекратил ввод нажав `Cancel`, если массив не
  пустой, необходимо посчитать сумму всех элементов массива и записать ее в
  переменную `total`. Используй цикл `for` или `for...of`. После чего в консоль
  выведи строку `'Общая сумма чисел равна [сумма]'`.

🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный
набор символов, не обязательно. Если хочешь, в случае некорректного ввода,
показывай `alert` с текстом `'Было введено не число, попробуйте еще раз'`, при
этом результат `prompt` записывать в массив чисел не нужно, после чего снова
пользователю предлагается ввести число в `prompt`. */

// let input;
// let total = 0;
// let message;
// const numbers = [];
// console.log(numbers);
// while (input !== null) {
//   input = prompt('Please enter a number!');
//   console.log(input);
//   if (Number.isNaN(Number(input)) === true) {
//     alert('Было введено не число, попробуйте еще раз');
//   } else {
//     numbers.push(Number(input));
//     console.log(numbers);
//   }
// }

// if (numbers.length > 0) {
//   for (const number of numbers) {
//     total = total + number;
//     message = `Общая сумма чисел равна ${total}`;
//   }
// }

// alert(message);

/**# Задание 7 - дополнительное, выполнять не обязательно

Есть массив `logins` с логинами пользователей. Напиши скрипт добавления логина в
массив `logins`. Добавляемый логин должен:

- проходить проверку на длину от 4 до 16-ти символов включительно
- быть уникален, то есть отсутствовать в массиве `logins`

Разбей задачу на подзадачи с помощью функций.

Напиши функцию `isLoginValid(login)`, в которой проверь количество символов
параметра `login` и верни `true` или `false` в зависимости от того, попадает ли
длина параметра в заданный диапазон от 4-х до 16-ти символов включительно.

Напиши функцию `isLoginUnique(allLogins, login)`, которая принимает список всех
логинов и добавляемый логин как параметры и проверяет наличие `login` в массиве
`allLogins`, возвращая `true` если такого логина еще нет и `false` если логин
уже используется.

Напиши функцию `addLogin(allLogins, login)` которая:

- Принимает новый логин и массив всех логинов как параметры
- Проверяет валидность логина используя вспомогательную функцию `isLoginValid`
- Если логин не валиден, прекратить исполнение функции `addLogin` и вернуть
  строку `'Ошибка! Логин должен быть от 4 до 16 символов'`
- Если логин валиден, функция `addLogin` проверяеть уникальность логина с
  помощью функции `isLoginUnique`
- Если `isLoginUnique` вернет `false`, тогда `addLogin` не добавляет логин в
  массив и возвращает строку `'Такой логин уже используется!'`
- Если `isLoginUnique` вернет `true`, `addLogin` добавляет новый логин в
  `logins` и возвращает строку `'Логин успешно добавлен!'`

🔔 **Принцип единственной ответственности функции** - каждая функция делает
что-то одно. Это позволяет переиспользовать код и изменять логику работы функции
только в одном месте, не затрагивая работу программы в целом.

Предикатные функции возвращают только `true` или `false`. Такие функции принято
называть начиная с `is`: `isLoginUnique` и `isLoginValid` в нашем случае.

- `isLoginUnique` только проверяет есть ли такой логин в массиве и возвращает
  `true` или `false`.
- `isLoginValid` только проверяет валидный ли логин и возвращает `true` или
  `false`.
- `addLogin` добавляет или не добавляет логин в массив. При этом для проверок
  условия добавления использует результаты вызовов других функций -
  `isLoginUnique` и `isLoginValid`. */

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// const isLoginValid = function (login) {
//   if (login.length >= 4 && login.length <= 16) {
//     return true;
//   }
//   return false;
// };

// const isLoginUnique = function (allLogins, login) {
//   const loginUnique = allLogins.includes(login) ? false : true;
//   return loginUnique;
// };

// const addLogin = function (allLogins, login) {
//   let message;
//   if (isLoginValid(login) === false) {
//     message = 'Ошибка! Логин должен быть от 4 до 16 символов';
//   }
//   if (isLoginUnique(allLogins, login) === false) {
//     message = 'Такой логин уже используется!';
//   }
//   if (isLoginValid(login) === true && isLoginUnique(allLogins, login) === true) {
//     allLogins.push(login);
//     message = 'Логин успешно добавлен!';
//   }
//   return message;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
// console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'

/*
1.
Умови завдання:
    1. Створіть масив genres з елементами Jazz і Blues.
    2. Додайте "Рок-н-рол" в кінець.
    3. Виведіть у консоль перший елемент масиву.
    4. Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини.
    5. Видаліть перший елемент та виведіть його в консоль.
    6. Вставте «Country» та «Reggy» на початок масиву.
*/

// const genres = ['Jazz', 'Blues'];
// genres.push('Рок-н-рол');
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.log(genres.shift(genres[0]));
// genres.unshift("Country", "Reggy");
// console.log(genres);

/*
2.
Умова завдання:
    Напиши скрипт для обчислення площі прямокутника зі сторонами,
    значення яких зберігаються в змінній величині у вигляді рядка.
    Значення гарантовано розділені пробілом.
*/

// const values = '8 11';
// const arr = values.split(" ");
// console.log(arr);
// const square = Number(arr[0]) * Number(arr[1]);
// console.log(square);
/*
3
Умова завдання:
    Напиши скрипт для перебору масиву fruits циклом for.
    Для кожного елемента масиву виведи у консоль рядок у форматі номер_елемента: значення_елемента.
    Нумерація елементів має починатися з першого.
*/

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// for (let i = 0; i < fruits.length; i++) {
//     const element = fruits[i];
//     console.log(`${i + 1}: ${element}`);
// }

/*
4
Умова завдання:
    Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
    У змінних names і phones зберігаються рядки імен та телефонних номерів, розділені комами.
    Порядковий номер імен та телефонів у рядках вказують на відповідність.
    Кількість імен та телефонів гарантовано однакова.
*/

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';
// const namesArr = names.split(",");
// const phonesArr = phones.split(',');
// for (let i = 0; i < namesArr.length; i++) {
//     const element = namesArr[i];
//     console.log(namesArr[i], phonesArr[i]);
// }


/*
5
Умова завдання:
    Напиши скрипт який виводить у консоль усі слова рядка крім першого та останнього.
    Результуючий рядок не повинен починатися або закінчуватися пробілом.
    Скрипт повинен працювати для будь-якого рядка.
*/

// const string = 'Welcome to the future';
// const stringArr = string.split(' ');
// console.log(stringArr.slice(1, -1).join(' '));

/*
6
Умова завдання:
    Напиши скрипт, який «розвертає» рядок (зворотній порядок букв)
    і виводить його в консоль.
*/

// const string = 'Welcome to the future';
// const stringArr = string.split('');
// console.log(stringArr.reverse().join(''));

// 2 var
// const string = 'Welcome to the future';
// const stringArr = string.split('');
// let reversedString = "";
// for (let i = string.length - 1; i >= 0; i -= 1) {
//     reversedString += string[i];
// }

/*
7
Умова завдання:
    Напиши скрипт сортування масиву рядків в алфавітному порядку
    за першою літерою елемента.
    "a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x", "y", "z"
*/

const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// for (const lang of langs) {
//     if (langs[0] > lang) {

//     }
// }
// console.log(langs.sort());

/*
8
Умова завдання:
    Напиши скрипт пошуку найменшого числа у масиві.
    Код має працювати для будь-якого масиву чисел.
    Використовуй цикл для розв'язання задачі.
*/

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];
// for (const number of numbers) {
//     if (number < min) {
//         min = number;
//     }
// }
// console.log(min);


