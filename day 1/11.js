// smallest and largest element in array
function min(arr) {
  let ans = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < ans) {
      ans = arr[i];
    }
  }
  return ans;
}
function max(arr) {
  let ans = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > ans) {
      ans = arr[i];
    }
  }
  return ans;
}

let numbers = [2, -35, -567, 0, 245, 57];
console.log("minimum = ", min(numbers), " maximum = ", max(numbers));
