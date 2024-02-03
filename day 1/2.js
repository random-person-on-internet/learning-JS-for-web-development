// function for sum
function sum(n1, n2) {
  return n1 + n2;
}

let a = 34;
let b = 66;
console.log(sum(a, b));

// factorial
let n = 5;
let fact = 1;
for (let i = 2; i <= n; i++) {
  fact *= i;
}
console.log("Factorial is ", fact);

// string manipulation
let num = 3456;
let str = num.toString();
// console.log(str[str.length - 2], str[str.length - 1]);
console.log(str.slice(-2));

// palindrome
let string = "racecar";
let reverse = string.split("").reverse().join("");
if (string == reverse) {
  console.log("It is a palindrome");
} else {
  console.log("It is not a palindrome");
}

// object
const person = {
  name: "mrmr",
  age: "18",
  city: "ahmedabad",
};
