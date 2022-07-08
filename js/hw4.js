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