function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
}

let m = parseInt(prompt("Enter number : "));
let n = parseInt(prompt("Enter power : "));
console.log(power(m, n));
