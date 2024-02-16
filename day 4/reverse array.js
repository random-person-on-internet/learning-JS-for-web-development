const reverseArray = (arr) => {
  return arr.reverse();
};

let size = parseInt(prompt("Enter size of array : "));
let numbers = [];
for (let i = 0; i < size; i++) {
  let temp = parseInt(prompt(`Enter number ${i + 1} : `));
  numbers.push(temp);
}

console.log(`Reversed array = ${reverseArray(numbers)}`);
