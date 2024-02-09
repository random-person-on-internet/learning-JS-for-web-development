function larger(a, b) {
  let ans = a > b ? a : b;
  return ans;
}

let a = parseInt(prompt("Enter number 1 : "));
let b = parseInt(prompt("Enter number 2 : "));
console.log(`Larger number is -> ${larger(a, b)}`);
