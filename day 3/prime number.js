function isPrime(n) {
  for (let i = 2; i < n / 2; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

let number = parseInt(prompt("Enter number : "));
console.log(isPrime(number));
