// separate even and odd numbers

function giveEvens(arr) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      ans.push(arr[i]);
    }
  }
  return ans;
}

function giveOdds(arr) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      ans.push(arr[i]);
    }
  }
  return ans;
}

let numbers = [132, 34325, 23, 5322, 12, 43, 13432, 211];
let odds = giveOdds(numbers);
let evens = giveEvens(numbers);
console.log(odds);
console.log(evens);
