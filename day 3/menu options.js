let choice = parseInt(
  prompt(
    "Main Menu:\n 1. Display Availiable Options\n 2. Perform Calculations\n 3. Exit Program\n\n Enter your choice (1-3): "
  )
);

switch (choice) {
  case 1:
    console.log("List => any list");
    break;

  case 2:
    let num1 = parseFloat(prompt("Enter first number: "));
    let num2 = parseFloat(prompt("Enter second number: "));
    let operator = prompt("Select operation (+, -, *, /): ");

    switch (operator) {
      case "+":
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;
      case "-":
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;
      case "*":
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
        break;
      case "/":
        if (num2 !== 0) {
          console.log(`${num1} / ${num2} = ${num1 / num2}`);
        } else {
          console.error("Division by zero is not allowed!");
        }
        break;
      default:
        console.error("Invalid operator!");
    }

  case 3:
    console.log("Exiting program...");
    break;

  default:
    console.error("Invalid choice. Pls try again.");
    break;
}
