function inArr(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == key) {
      return true;
    }
  }
  return false;
}

const arr = [1, 2, 3, 4, 5];
const key = 12;
console.log(inArr(arr, key));
