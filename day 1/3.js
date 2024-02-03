// function to duplicate arrays
function duplicateElements(arr) {
  return arr.slice();
}

let array = [1, 2, 3, 4, 5];
let array2 = duplicateElements(array);
for (let i = 0; i < array2.length; i++) {
  console.log(array2[i]);
}

// sorting array
let arr = [34, 654, 12, 6, -23, 0, -56];

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[index] > arr[j]) {
        index = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[index];
    arr[index] = temp;
  }
}

selectionSort(arr);
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// calculator
let a = 5;
let b = 3;
console.log("Sum = ", a + b);
console.log("Diffrence = ", a - b);
console.log("Product = ", a * b);
console.log("Division = ", a / b);
console.log("Remainder = ", a % b);

// generating random numbers
let x = Math.floor(Math.random() * 6 + 1);
console.log(x);
