// can also do :
// const isPrime = number => {...}

function isPrime(number) {
  if (number % 2 === 0) {
    return false;
  }
  for (let i = 3; i < number / 2; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

let n = parseInt(prompt("Enter number : "));
console.log(isPrime(n));
