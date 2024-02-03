// function based calc

function calc(n1, n2, operation) {
  if (operation == 1) {
    return n1 + n2;
  } else if (operation == 2) {
    return n1 - n2;
  } else if (operation == 3) {
    return n1 * n2;
  } else {
    return n1 / n2;
  }
}

let n1 = parseInt(prompt("Enter first num : "));
let n2 = parseInt(prompt("Enter second num : "));
let operation = parseInt(
  prompt(
    "1 for Addition\n 2 for Subtraction\n 3 for Multiplication\n 4 for Division : "
  )
);

let ans = calc(n1, n2, operation);
console.log(ans);
