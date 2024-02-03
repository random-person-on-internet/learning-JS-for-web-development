// calculator
let input = parseInt(
  prompt(
    "1 for Addition\n 2 for Subtraction\n 3 for Multiplication\n 4 for Division : "
  )
);

let n1 = parseInt(prompt("Enter first number : "));
let n2 = parseInt(prompt("Enter second number : "));

switch (input) {
  case 1:
    console.log(n1 + n2);
    break;
  case 2:
    console.log(n1 - n2);
    break;
  case 3:
    console.log(n1 * n2);
    break;
  case 4:
    console.log(n1 / n2);
    break;

  default:
    console.log("Invalid Input...");
    break;
}
