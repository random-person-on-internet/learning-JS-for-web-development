// insertion sort algorithm

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    for (; j >= 0; j--) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = temp;
  }
}

let numbers = [23, 53, 575, 22, -89, -902, 0, 12, 23];
insertionSort(numbers);
console.log(numbers);
