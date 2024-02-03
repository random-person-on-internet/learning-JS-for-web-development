function removeDuplicates(arr) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (!ans.includes(arr[i])) {
      ans.push(arr[i]);
    }
  }

  return ans;
}

let arr = [1, 4, 5, 2, 5, 2, 6, 7];
let ans = removeDuplicates(arr);
console.log(ans);
