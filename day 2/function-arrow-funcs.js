// function add(a, c) {
//   return a + c;
// }
// another easier way of doing it

const add = (a, b) => a + b;
console.log(add(4, 5));

// ANONYMOUS FUNCTIONS
const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function (numbers) {
//   console.log(number);
// });
// shortening with arrow function
numbers.forEach((number) => console.log(number));
