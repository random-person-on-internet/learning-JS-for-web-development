// calculating factorial

function fact(n) {
  if (n <= 0) {
    return -1;
  } else if (n == 1) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}

let n = parseInt(prompt("Enter number : "));
let ans = fact(n);
if (ans != -1) {
  console.log(ans);
} else {
  console.log("Invalid Input...");
}
