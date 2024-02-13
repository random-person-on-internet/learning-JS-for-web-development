const sum1ton = (number) => {
  if (number <= 1) {
    return number;
  } else {
    return number + sum1ton(number - 1);
  }
};

let x = parseInt(prompt("Enter number : "));
console.log(sum1ton(x));
