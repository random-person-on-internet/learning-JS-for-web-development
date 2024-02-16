// const swapAlternates = (arr) => {
//   for (let i = 0; i < arr.length; i += 2) {
//     let temp = arr[i];
//     arr[i] = arr[i + 1];
//     arr[i + 1] = temp;
//   }
//   return arr;
// };

const swapAlternates = (arr) => {
  return arr.map((value, index) =>
    index % 2 === 0 ? arr[index + 1] : arr[index - 1]
  );
};

let size = parseInt(prompt("Enter size of array : "));
let numbers = [];
for (let i = 0; i < size; i++) {
  let temp = parseInt(prompt(`Enter number ${i + 1} : `));
  numbers.push(temp);
}

console.log(`Array after swapping alternatives = ${swapAlternates(numbers)}`);
