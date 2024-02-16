// let uniqueElement = (arr) => {
//   let ans = 0;
//   for (let i = 0; i < arr.length; i++) {
//     ans ^= arr[i];
//   }
//   return ans;
// };

let uniqueElement = (arr) => {
  return arr.reduce((acc, num) => acc ^ num, 0);
};

let size = parseInt(prompt("Enter size of array : "));
let numbers = [];
for (let i = 0; i < size; i++) {
  let temp = parseInt(prompt(`Enter number ${i + 1} : `));
  numbers.push(temp);
}

console.log(`Unique element is ${uniqueElement(numbers)}`);
