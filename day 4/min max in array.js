const minElement = (arr) => {
  let mine = arr[0];
  for (let i = 0; i < arr.length; i++) {
    arr[i] < mine ? (mine = arr[i]) : (mine = mine);
  }
  return mine;
};

const maxElement = (arr) => {
  let maxe = arr[0];
  for (let i = 0; i < arr.length; i++) {
    arr[i] > maxe ? (maxe = arr[i]) : (maxe = maxe);
  }
  return maxe;
};

let size = parseInt(prompt("Enter number of elements : "));
let numbers = [];
for (let i = 0; i < size; i++) {
  let temp = parseInt(prompt(`Enter number ${i + 1} : `));
  numbers.push(temp);
}

console.log(
  `Maximum = ${maxElement(numbers)} \n Minimum = ${minElement(numbers)}`
);
