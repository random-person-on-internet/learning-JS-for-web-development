const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(sum);

// shortebed syntax :
const sum2 = numbers.reduce((acc, curr) => acc + curr, 10);
console.log(sum2);

const cart = [
  { name: "Prooduct 1", price: 130 },
  { name: "Product 2", price: 150 },
  { name: "Product 3", price: 175 },
];

const total = cart.reduce((acc, prod) => acc + prod.price, 0);
console.log(total);
