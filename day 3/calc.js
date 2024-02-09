function ans(n1, n2, command) {
  switch (command) {
    case 1:
      return n1 + n2;
      break;
    case 2:
      return n1 - n2;
      break;
    case 3:
      return n1 * n2;
      break;
    case 4:
      return n1 / n2;
      break;
    default:
      return "Invalid input...";
      break;
  }
}

let a = parseInt(prompt("Enter first number : "));
let b = parseInt(prompt("Enter second number : "));
let command = parseInt(
  prompt(
    "Enter number according to requirement : \n1 => Addition\n2 => Subtraction\n3 => Multiplication\n4 => Division"
  )
);

console.log(ans(a, b, command));
