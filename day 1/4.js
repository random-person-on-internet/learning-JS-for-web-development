function absoluteValue(num) {
  if (num < 0) {
    num *= -1;
  }
  return num;
}

let n = prompt("Enter number : ");
console.log(absoluteValue(n));
