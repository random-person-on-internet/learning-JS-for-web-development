// selection sort algorithm
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

let numbers = [34, 65, -89, -12, 0, 342];
selectionSort(numbers);
console.log(numbers);
