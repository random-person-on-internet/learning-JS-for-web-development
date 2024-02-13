const isEven = (number) => {
  return number % 2 === 0 ? "even" : "odd";
};

let n = parseInt(prompt("Enter number"));
console.log(isEven(n));
