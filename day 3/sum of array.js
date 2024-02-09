function arraySum(arr) {
  let sum = 0;
  for (let i in arr) {
    sum += arr[i];
  }
  return sum;
}

let arr = [];
let size = parseInt(prompt("Enter size of array : "));
for (let i = 0; i < size; i++) {
  arr.push(parseInt(prompt(`Enter value ${i + 1} : `)));
}

console.log(`Sum of array is => ${arraySum(arr)}`);
