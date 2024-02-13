const fibonacciElement = (number) => {
  if (number <= 1) {
    return number;
  }
  return fibonacciElement(number - 1) + fibonacciElement(number - 2);
};

let n = parseInt(prompt("Enter index to get element at it : "));
console.log(fibonacciElement(n));
