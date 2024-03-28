const gcd = (a, b) => {
  if (b == 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
};

let n1 = parseInt(prompt("Enter first number : "));
let n2 = parseInt(prompt("Enter second number : "));

console.log(gcd(n1, n2));
