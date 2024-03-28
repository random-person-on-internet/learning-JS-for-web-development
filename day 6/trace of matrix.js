// "Trace is 'addition' of diagonal elements of matrix, not their 'sum'" - ASOIT teachers

const trace = (matrix) => {
  let ans = 0;
  for (let i = 0; i < matrix[0].length; i++) {
    ans += matrix[i][i];
  }
  return ans;
};

let rows = parseInt(prompt("Enter number of rows of matrix : "));
let matrix = [];

for (let i = 0; i < rows; i++) {
  let row = [];
  for (let j = 0; j < rows; j++) {
    let element = parseInt(
      prompt(`Enter element at row ${i + 1}, column ${j + 1}`)
    );
    row.push(element);
  }
  matrix.push(row);
}

console.log(trace(matrix));
