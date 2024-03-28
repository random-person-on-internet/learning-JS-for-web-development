const sqrt = (number) => {
  let guess = number / 2;
  let mindif = 1e-6;

  while (guess * guess - number > mindif) {
    guess = 0.5 * (guess + number / guess);
  }
  return guess;
};

let x = parseInt(prompt("Enter number : "));
console.log(sqrt(x));
