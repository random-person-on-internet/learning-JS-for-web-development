const sumOfElements = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

let size = parseInt(prompt("Enter number of elements : "));
let numbers = [];
for (let i = 0; i < size; i++) {
  let temp = parseInt(prompt(`Enter number ${i + 1} : `));
  numbers.push(temp);
}

console.log(`Sum is ${sumOfElements(numbers)}`);
