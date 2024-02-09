function fact(n) {
  if (n < 0) {
    return -1;
  } else if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}

let num = parseInt(prompt("Enter number to get factoria : "));
console.log(fact(num));
