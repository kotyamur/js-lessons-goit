// 1 task
//  Объяви две переменные хранящие название и цену товара: `name` и `price`
// - Присвой переменным следующие характеристики товара (сразу при объявлении)
// - название: Генератор защитного поля
// - цена: 1000
// - Используя шаблонную строку выведи в консоль информацию о товаре, получится:
// `'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'`.
// - Присвой товару новую цену - 2000
// - Используя шаблонную строку выведи в консоль информацию о товаре, получится:
// `'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'`.

// const name = 'Генератор защитного поля';
// const price = 1000;
// console.log(`Выбран "${name}", цена за штуку ${price} кредитов`);

// const name = 'Генератор защитного поля';
// const price = 2000;
// console.log(`Выбран "${name}", цена за штуку ${price} кредитов`);

// 2 task
// Напиши скрипт проверки количества товаров на складе. Есть переменные `total`
// (количество товаров на складе) и `ordered` (единиц товара в заказе).

// Сравни эти значения и по результатам выведи:

// - Если в заказе указано число, превышающее количество товаров на складе, то
//   выведи сообщение `"На складе недостаточно твоаров!"`.
// - В другом случае выводи сообщение `"Заказ оформлен, с вами свяжется менеджер"`.

// Проверь работоспособность кода с разными значениями переменной `ordered`,
// например `20`, `80` и `130`.

// const total = 100;
// const ordered = 130;
// let message;
// if (ordered > total) {
//     message = 'На складе недостаточно тваров!'
// } else {
//     message = 'Заказ оформлен, с вами свяжется менеджер'
// }
// console.log(message);

// 3 task
/*Напиши скрипт имитирующий авторизацию администратора в панели управления.

Есть переменная `message` в которую будет записано сообщение о результате. При
загрузке страницы у посетителя запрашивается пароль через `prompt`:

- Если нажали `Cancel`, записать в `message` строку `'Отменено пользователем!'`
- В протовном случае, если введен пароль который совпадает со значением
  константы `ADMIN_PASSWORD`, записать в `message` строку `'Добро пожаловать!'`
- В противном случае, то есть если ни одно из предыдущих условий не выполнилось,
  записать в `message` строку `'Доступ запрещен, неверный пароль!'`
- После всех проверок вывести в `alert` значение переменной `message`.
*/

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;
// let password = prompt("Please enter a password!");
// switch (password) {
//     case null:
//         message = 'Отменено пользователем!';
//         break;

//     case ADMIN_PASSWORD:
//         message = 'Добро пожаловать!';
//         break;

//     default:
//         message = 'Доступ запрещен, неверный пароль!';
// }
// alert(message);

// 4 task
/*На счету пользователя есть `23580` кредитов, значение хранится в переменной
`credits` (создай и присвой). Пользователь решает купить ремонтных дроидов,
которые стоят по `3000` кредитов за штуку. Цена одного дроида хранится в
переменной `pricePerDroid` (создай и присвой).

При посещении страницы, используя `prompt`, необходимо спросить количество
дроидов которые пользователь хочет купить и сохранить в переменную.

Напиши скрипт который:

- Если в `prompt` была нажата кнопка `Cancel`, выводит в консоль сообщение
  `'Отменено пользователем!'`.
- В противном случае, рассчитывает общую цену заказа и сохраняет в переменной
  `totalPrice`.
- Проверяет сможет ли пользователь оплатить заказ:
  - если сумма к оплате превышает количество кредитов на счету, выводи в консоль
    сообщение `'Недостаточно средств на счету!'`.
  - в противном случае необходимо посчитать остаток кредитов на счету и вывести
    сообщение
    `'Вы купили [число] дроидов, на счету осталось [число] кредитов.'`. */

// a))

// let credits = 23580;
// const pricePerDroid = 3000;
// let numberOfDrons = prompt("Please enter a number Of Drons!");
// let totalPrice;
// if (numberOfDrons === null) {
//     console.log('Отменено пользователем!') ;
// } else {
//     totalPrice = numberOfDrons * pricePerDroid;
//     if (totalPrice > credits) {
//         console.log('Недостаточно средств на счету!') ;
//     } else {
//         console.log(`Вы купили ${numberOfDrons} дроидов, на счету осталось ${credits - totalPrice} кредитов.`) ;
//     }
// }

// b))

// let credits = 23580;
// const pricePerDroid = 3000;
// let numberOfDrons = prompt("Please enter a number Of Drons!");
// let message;
// let totalPrice;
// if (numberOfDrons === null) {
//     message = 'Отменено пользователем!';
// } else {
//     totalPrice = numberOfDrons * pricePerDroid;
//     if (totalPrice > credits) {
//         message = 'Недостаточно средств на счету!';
//     } else {
//         message = `Вы купили ${numberOfDrons} дроидов, на счету осталось ${credits - totalPrice} кредитов.`;
//     }
// }
// alert(message);

// 5 task
/*Пользователь может оформить доставку товара к себе в страну, указав ее при
посещении страницы в `prompt`. Учти, пользователь может ввести имя страны не
только буквами нижнего регистра, а к примеру `'кИтАЙ'`.

Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.
Обязательно используй `switch`. Формат сообщения:
`'Доставка в [страна] будет стоить [цена] кредитов'`.

Но доставка есть не везде, если указанной страны нет в списке, то выводи в
`alert` сообщение `'В вашей стране доставка не доступна'`. */

// let country = prompt("Please enter a name of country!");
// let normalizedToUpperCaseCountry = country.toUpperCase();
// let message;
// let costOfDelivery;
// switch (normalizedToUpperCaseCountry ) {
//     case "КИТАЙ":
//         costOfDelivery = 100;
//         message = `Доставка в ${normalizedToUpperCaseCountry} будет стоить ${costOfDelivery} кредитов`;
//         break;
  
//     case "ЧИЛИ":
//         costOfDelivery = 250;
//         message = `Доставка в ${normalizedToUpperCaseCountry} будет стоить ${costOfDelivery} кредитов`;
//         break;
  
//     case "АВСТРАЛИЯ":
//         costOfDelivery = 170;
//         message = `Доставка в ${normalizedToUpperCaseCountry} будет стоить ${costOfDelivery} кредитов`;
//         break;

//     case "ИНДИЯ":
//         costOfDelivery = 80;
//         message = `Доставка в ${normalizedToUpperCaseCountry} будет стоить ${costOfDelivery} кредитов`;
//         break;

//     case "ЯМАЙКА":
//         costOfDelivery = 120;
//         message = `Доставка в ${normalizedToUpperCaseCountry} будет стоить ${costOfDelivery} кредитов`;
//         break;
  
//     default:
//         message = 'В вашей стране доставка не доступна';
// }
// alert(message);

// 6 task
/*Напиши скрипт который просит посетителя ввести число в `prompt` до тех пор, пока
посетитель на нажмет `Cancel` и каждый раз добавляет введенное значение к общей
сумме.

- При загрузке страницы пользователю предлагается в `prompt` ввести число. Ввод
  добавляется к значению переменной `total`.
- Операция ввода числа продолжается до тех пор, пока пользователь не нажмет
  кнопку `Cancel` в `prompt`.
- После того как пользователь прекратил ввод нажав кнопку `Cancel`, показать
  `alert` со строкой `'Общая сумма чисел равна [сумма]'`. */

// let input;
// let total = 0;
// let message;
// while (true)  {
//     input = prompt("Please enter a number!");
//     total = total + Number(input);
//     message = `Общая сумма чисел равна ${total}`;
//     if (input === null) {
//         break;
//     }
// }
// alert(message);

// true variant

// let input;
// let total = 0;
// let message;
// while (input !== null)  {
//     input = prompt("Please enter a number!");
//     total = total + Number(input);
//     message = `Общая сумма чисел равна ${total}`;
// }
// alert(message);

// let input;
// let total = 0;
// let message;
// while (input !== null) {
//   input = prompt('Please enter a number!');
//   if (Number.isNaN(Number(input)) === true) {
//     alert('It is not a number! Please enter a number!');
//   } else {
//     total = total + Number(input);
//     message = `Общая сумма чисел равна ${total}`;
//   }
// }
// alert(message);

/*
1.

Умова завдання:
Використовуючи конструкцію if...else і prompt, написати код, який буде запитувати 'Яка офіційна назва в JavaScript?'.
Якщо користувач ввів ECMAScript, то відображати alert з реченням 'Правильно!', якщо ні 'Це ECMAScript!'.
*/
// const nameJs = 'ECMAScript';
// const normalizedToUpperCaseName = nameJs.toUpperCase();
// let name = prompt('Яка офіційна назва в JavaScript?').toUpperCase();
// let message;
// if (name === normalizedToUpperCaseName) {
//     message = 'Правильно!';
// } else {
//     message = 'Це ECMAScript!';
// }
// alert(message);

/*
2.

Умова завдання:
Напиши скрипт для відображення години та хвилин в консолі браузера у вигляді '19 г. 26 хв.'.
Якщо значення змінної рівно '0' то виводити речення '19 г' без хвилин.
*/

// const hours = 14;
// const minutes = 26;
// let hoursDeclaration = '';
// let minutesDeclaration = '';
// if (hours >= 0) {
//     hoursDeclaration = `${hours} г.`;
// }
// if (minutes > 0) {
//     minutesDeclaration = ` ${minutes} хв.`;
// }
// console.log(`'${hoursDeclaration}${minutesDeclaration}'`);

/*
3.

Умова завдання:
Напиши скрипт, який виводить у консоль рядок "Це позитивне число", якщо в prompt користувач ввів число більше за нуль.
Якщо введено нуль, виводь у консоль рядок "Це нуль". Якщо передали від'ємне число, у консолі має бути рядок "Це від'ємне число".
*/

// const userInput = Number(prompt('Введіть число'));
// let message;
// if (Number.isNaN(userInput)) {
//     message = 'Введіть число';
//     alert(message);
// } else {
//     if (userInput > 0) {
//         message = "Це позитивне число";
//     } else if (userInput < 0) {
//         message = "Це від'ємне число";
//     } else {
//         message = "Це нуль";
//     }
// }

// console.log(message);

/*
4.

Умова завдання:
Напиши скрипт який перевіряє чи закінчується значення змінної link символом /.
Якщо ні, додай до кінця значення link цей символ. Використовуй конструкцію if...else.
*/

// let link = 'https://my-site.com/about/';
// if (link.endsWith('/')) {
//     console.log(link);
// } else {
//     link = link + '/';
//     console.log(link);
// }

/*
5.

Умова завдання:
Напиши скрипт який перевіряє чи закінчується значення змінної link символом /.
Якщо ні, додай у кінець значення link цей символ, але тільки в тому випадку, якщо в link є підрядок "my-site".
*/

// let link = 'https://my-site.com/about';
// if (link.endsWith('/') === false && link.includes('my-site') === true) {
//     console.log(link.endsWith('/') === false);
//     console.log(link.includes('my-site') === true);
//     link = link + '/';
//     console.log(link);
// } else {
//     console.log(link);
// }

// let link = 'https://my-site.com/about';
// if (!link.endsWith('/') && link.includes('my-site')) {
//     console.log(!link.endsWith('/'));
//     console.log(link.includes('my-site'));
//     link = link + '/';
//     console.log(link);
// } else {
//     console.log(link);
// }

/*
6/

Умова завдання:
Напиши скрипт який виводитиме в консоль браузера рядок залежно від значення змінної hours.
Якщо значення змінної hours:
- менше 17, виводь рядок "Pending"
- більше або рівне 17 і менше або дорівнює 24, виводь рядок "Expires"
- більше 24, виводи рядок "Overdue"
*/

// const hours = -10;
// if (hours > 24) {
//     console.log("Overdue");
// } else if (hours >= 17 && hours <= 24) {
//     console.log("Expires");
// } else {
//     console.log("Pending");
// }

/*
7/

Умова завдання:
Напиши скрипт для відображення часу дедлайн здачі проекту. Використовуй конструкцію if...else.
- Якщо до дедлайну 0 днів - виведи рядок "Сьогодні"
- Якщо до дедлайну 1 день - виведи рядок "Завтра"
- Якщо до дедлайну 2 дні - виведи рядок "Післязавтра"
- Якщо до дедлайну 3+ днів - виведи рядок "Дата в майбутньому"
*/

// const daysUntilDeadline = 0;
// let message;
// if (daysUntilDeadline >= 3) {
//     message = "Дата в майбутньому";
// } else if (daysUntilDeadline === 2) {
//     message = "Післязавтра";
// } else if (daysUntilDeadline === 1) {
//     message = "Завтра";
// } else if (daysUntilDeadline === 0) {
//     message = "Сьогодні";
// } else {
//     message = "Проєкт завершено";
// }
// console.log(message);

/*
8.

Умова завдання:
Напиши скрипт для відображення часу дедлайн здачі проекту. Використовуй конструкцію switch.
- Якщо до дедлайну 0 днів - виведи рядок "Сьогодні"
- Якщо до дедлайну 1 день - виведи рядок "Завтра"
- Якщо до дедлайну 2 дні - виведи рядок "Післязавтра"
- Якщо до дедлайну 3+ днів - виведи рядок "Дата в майбутньому"
*/

// const daysUntilDeadline = 3;
// let message;
// switch (daysUntilDeadline) {
//     case 0:
//         message = "Сьогодні";
//         break;
  
//     case 1:
//         message = "Завтра";
//         break;
  
//     case 2:
//         message = "Післязавтра";
//         break;
  
//     default:
//         message = "Дата в майбутньому";
// }
  
// console.log(message);

/*
8.

Умова завдання:
Напиши цикл for який виводить у консоль браузера числа за зростанням від min до max, але якщо число кратне 5.
*/

// const max = 100;
// const min = 20;
// for (let i = 20; i >= min && i <= max; i += 5) {
//     console.log(i);
// }

// const max = 100;
// const min = 20;
// for (let i = 20; i >= min && i <= max; i += 1) {
//     if (i % 5 !== 0) {
//         continue;
//     }
//     console.log(i);
// }

/*
10.
Умова завдання:
Напиши скрипт, який буде запитувати логін за допомогою prompt і логуватиме результат у консоль браузера.
- Якщо відвідувач вводить "Адмін", то prompt запитує пароль
- Якщо нічого не введено або натиснуто клавішу Esc - вивести рядок "Скасовано"
- В іншому випадку вивести рядок "Я вас не знаю"
Пароль перевіряти так:
- Якщо введено пароль "Я адмін", то вивести рядок "Вітаю!"
- Інакше виводити рядок "Невірний пароль"
*/

// const userLogin = prompt('Введіть логін');
// let message;
// if (userLogin === 'Адмін') {
//     const userParol = prompt('Введіть пароль');
//     if (userParol === 'Я адмін') {
//             message = 'Вітаю!';
//         } else {
//             message = 'Невірний пароль';
//         }
// } else if (userLogin === '' || userLogin === null) {
//     message = 'Скасовано';
// } else {
//     message = 'Я вас не знаю';
// }
// alert(message);

// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }

// 23
// function isNumberNotInRange(start, end, number) {
//     const isInRange = number >= start && number <= end;
//     const isNotInRange = !isInRange; // Change this line
  
//     return isNotInRange;
//   }
// 26
// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
//     return message;
//   }
// 33
// function formatMessage(message, maxLength) {
//   let result;
//   if (message.length <= maxLength) {
//     result = message  
//   } else {
//     result = `${message.slice(0, maxLength)}...`;
//   }
//   return result;
// }
// 36
// function checkForSpam(message) {
//     let result;
//     const normalizedToLowerCaseMessage = message.toLowerCase()
//     result = normalizedToLowerCaseMessage.includes("spam") || normalizedToLowerCaseMessage.includes("sale");
//     return result;
//   }