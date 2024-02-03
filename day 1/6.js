let number = prompt("Enter number : ");
let firstDig = parseInt(number.slice(0, 1));
let lastDig = parseInt(number.slice(-1));

console.log(firstDig, " ", lastDig);
