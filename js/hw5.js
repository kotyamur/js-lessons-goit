// 1/20

// const pizzaPalace = {
//   pizzas: ['Supercheese', 'Smoked', 'Four meats'],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// 2/20

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// 3/20

// const historyService = {
//   orders: [
//     { email: 'jacob@hotmail.com', dish: 'Burrito' },
//     { email: 'solomon@topmail.net', dish: 'Burger' },
//     { email: 'artemis@coldmail.net', dish: 'Pizza' },
//     { email: 'solomon@topmail.net', dish: 'Apple pie' },
//     { email: 'jacob@hotmail.com', dish: 'Taco' },
//   ],
//   getOrdersLog() {
//     return this.orders.map(order => `email: ${order.email} dish: ${order.dish}`).join(' - ');
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
// };

// 5/20

// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish',
// };

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// 9/20

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getPrice() {
//     return this.price;
//   }
//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }

// 10/20

// class Storage {
//     constructor (items) {
//         this.items = items;
//     }
//     getItems() {
//         return this.items;
//     }
//     addItem(newItem) {
//         this.items.push(newItem);
//     }
//     removeItem(itemToRemove) {
//         this.items = this.items.filter(item => item !== itemToRemove);
//     }
// }

// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// 11/20

// class StringBuilder {
//     constructor (initialValue) {
//         this.value = initialValue;
//     }
//     getValue() {
//         return this.value;
//     }
//     padEnd(str) {
//         this.value = this.value + str;
//     }
//     padStart(str) {
//         this.value = str + this.value;
//     }
//     padBoth(str) {
//         this.padStart(str);
//         this.padEnd(str);
//     }
// }

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// 12/20

// class Car {
//   model;
//   price;
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand() {
//     return this.#brand;
//   }
//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// }

// 16/20

// class Car {
//   #price;
//   static MAX_PRICE = 50000;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice > Car.MAX_PRICE) {
//       return;
//     }
//     this.#price = newPrice;
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// 17/20

// class Car {
//   static #MAX_PRICE = 50000;
//   static checkPrice(price) {
//     if (price > Car.#MAX_PRICE) {
//       return "Error! Price exceeds the maximum";
//     }
//     return "Success! Price is within acceptable limits";
//   }
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// 19/20

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = [];
//   }

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

// # Завдання 1

// Розстав відсутні `this` в методах об'єкта `account`.

// const account = {
//   owner: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['order-1', 'order-2', 'order-3'],
//   changeDiscount(value) {
//     this.discount = value;
//   },
//   showOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost;
//     this.orders.push(order);
//   },
// };
// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15
// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']
// account.addOrder(5000, 'order-4');
// console.log(account.balance); // 19000
// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']

// # Завдання 2

// Виправ помилки, які будуть в консолі, щоб скрипт запрацював.

// const inventory = {
//   items: ['Knife', 'Gas mask'],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);
//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);
//     this.items = this.items.filter(item => item !== itemName);
//   },
// };
// const invokeInventoryAction = function (itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   action(itemName);
// };
// invokeInventoryAction('Medkit', inventory.add.bind(inventory));
// // Invoking action on Medkit
// // Adding Medkit to inventory
// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']
// invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));
// // Invoking action on Gas mask
// // Removing Gas mask from inventory
// console.log(inventory.items); // ['Knife', 'Medkit']

// # Завдання 1

// Напиши функцію-конструктор `Account`, яка створює об'єкт з властивостями `login`
// і `email`. В `prototype` функції-конструктора добав метод `getInfo()`, який
// виводить в консоль значення полів `login` і `email` об'єкта який його викликав.
// const Account = function ({ login, email } = {}) {
//     this.login = login;
//     this.email = email;
// }
// Account.prototype.getInfo = function () {
//     console.log(`Login: ${this.login}, Email: ${this.email}`);
// };

// console.log(Account.prototype.getInfo); // function
// const mango = new Account({
//   login: 'Mangozedog',
//   email: 'mango@dog.woof',
// });
// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });
// poly.getInfo(); // Login: Poly, Email: poly@mail.com

// # Завдання 2

// Напиши клас `User` для створення користувача з наступними властивостями:

// - `name` - рядок
// - `age` - число
// - `followers` - число

// Добав метод `getInfo()`, який, виводить рядок:
// `User ${ім'я} is ${вік} years old and has ${кількість фоловерів} followers`

// class User {
//     constructor({ name, age, followers } = {}) {
//         this.name = name;
//         this.age = age;
//         this.followers = followers;
//     }

//     getInfo() {
//         return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`; 
//     }
// }

// const mango = new User({
//   name: 'Mango',
//   age: 2,
//   followers: 20,
// });
// mango.getInfo(); // User Mango is 2 years old and has 20 followers
// console.log(mango.getInfo());
// const poly = new User({
//   name: 'Poly',
//   age: 3,
//   followers: 17,
// });
// poly.getInfo(); // User Poly is 3 years old and has 17 followers
// console.log(poly.getInfo());

// # Завдання 3

// Напиши клас `Storage`, який буде створювати об'єкти для управління складом
// товарів. При виклику буде отримувати один аргумент - початковий масив товарів, і
// записувати його у властивість `items`.

// Додай методи класу:

// - `getItems()` - повертає масив поточних товарів
// - `addItem(item)` - отримує новий товар і додає його до поточних
// - `removeItem(item)` - отримує товар і, якщо він є, видаляє його з поточних

// class Storage {
//     constructor(items = []) {
//     this.items = items;
//     }

//     getItems() {
//         return this.items;
//     }
//     addItem(item) {
//         this.items.push(item);
//     }
//     removeItem(item) {
//         this.items = this.items.filter(el => el !== item);
//     }
// }

// const storage = new Storage([
//   'Нанітоіди',
//   'Пролонгер',
//   'Залізні жупи',
//   'Антигравітатор',
// ]);
// const items = storage.getItems();
// console.log(storage.getItems());
// console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]
// storage.addItem('Дроїд');
// console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]
// storage.removeItem('Пролонгер');
// console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]

// # Завдання 4

// Напиши клас `StringBuilder`. На вхід він отримує один параметр - рядок,
// який записує у властивість `_value`.

// Додай класу наступний функціонал:

// - Геттер `value` - повертає поточне значення поля `_value`
// - Метод `append(str)` - отримує параметр str (рядок) і додає його в кінець
//   `_value`
// - Метод `prepend(str)` - отримує параметр str (рядок) і додає його на початок
//   `_value`
// - Метод `pad(str)` - отримує параметр str (рядок) і додає його на початок і в кінець `_value`

// class StringBuilder {
//     constructor(str) {
//         this.value = str;
//     }
//     getValue() {
//         return this.value;
//     }
//     append(str) {
//         this.value += str;
//     }
//     prepend(str) {
//         this.value = str + this.value;
//     }
//     pad(str) {
//         this.append(str);
//         this.prepend(str);
//     }
// }

// const builder = new StringBuilder('.');
// builder.append('^');
// console.log(builder.value); // '.^'
// builder.prepend('^');
// console.log(builder.value); // '^.^'
// builder.pad('=');
// console.log(builder.value); // '=^.^='

// # Завдання 5

// Напиши клас `Car` із зазначеними властивостями і методами.

// class Car {
//   /*
//    * Додай статичний метод `getSpecs(car)`,
//    * який приймає об'єкт-машину як параметр і виводить
//    * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
//    */
//     static getSpecs(car) {
//         console.log(car);
//     }
//   /*
//    * Конструктор отримує об'єкт налаштувань.
//    *
//    * Додай властивості майбутнього екземпляра класу:
//    *  speed - поточна швидкість, початкова 0
//    *  price - ціна автомобіля
//    *  maxSpeed - максимальна швидкість
//    *  isOn - заведений автомобіль, значення true або false. Спочатку false
//    *  distance - загальний кілометраж, спочатку 0
//    */
//     constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
//         this.speed = speed;
//         this._price = price;
//         this.maxSpeed = maxSpeed;
//         this.isOn = isOn;
//         this.distance = distance;
//     }
//   /*
//    * Додай геттер і сеттер для властивості price,
//    * який буде працювати з властивістю ціни автомобіля.
//    */
//     get price() {
//         return this._price;
//     }
//     set price(newPrice) {
//         this._price = newPrice;
//     }
//   /*
//    * Додай код для того, щоб завести автомобіль
//    * Записує у властивість isOn значення true
//    */
//     turnOn() {
//       this.isOn = true;
//     }
//   /*
//    * Додай код для того, щоб заглушити автомобіль
//    * Записує у властивість isOn значення false,
//    * і скидає поточну швидкість в 0
//    */
//     turnOff() {
//         this.isOn = false;
//         this.speed = 0;
//     }
//   /*
//    * Додає до властивості speed отримане значення,
//    * за умови, що результуюча швидкість
//    * не більше, ніж значення властивості maxSpeed
//    */
//     accelerate(value) {
//         if (value > this.maxSpeed) {
//           return
//         }
//         this.speed += value;
//     }
//   /*
//    * Забирає від властивості speed отримане значення,
//    * за умови, що результуюча швидкість не менше нуля
//    */
//     decelerate(value) {
//         if (value > this.speed) {
//           return;
//         }
//         this.speed -= value;
//     }
//   /*
//    * Додає в поле distance кілометраж (hours * speed),
//    * але тільки в тому випадку, якщо машина заведена!
//    */
//     drive(hours) {
//         if (!this.isOn) {
//           return;
//         }
//         let newdistance = hours * this.speed;
//         this.distance += newdistance;
//     }
// }
// const mustang = new Car({ maxSpeed: 200, price: 2000 });

// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);
// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();
// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000