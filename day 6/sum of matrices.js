const takeMatrixInput = () => {
  let inputMatrix = [];
  let rows = parseInt(prompt("Enter number of rows : "));
  let columns = parseInt(prompt("Enter number of columns : "));

  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < columns; j++) {
      let element = parseInt(
        prompt(`Enter element at row ${i + 1}, column ${j + 1} : `)
      );
      row.push(element);
    }
    inputMatrix.push(row);
  }

  return inputMatrix;
};

const displayMatrix = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    let output = [];
    for (let j = 0; j < matrix[i].length; j++) {
      output.push(matrix[i][j]);
    }
    console.log(output);
  }
};

const sumOfMarices = (m1, m2) => {
  for (let i = 0; i < m1.length; i++) {
    for (let j = 0; j < m1[i].length; j++) {
      m1[i][j] += m2[i][j];
    }
  }
  return m1;
};

alert("Enter inputs for matrix 1 : ");
let matrix1 = takeMatrixInput();
alert("Enter inputs for matrix 2 : ");
let matrix2 = takeMatrixInput();
displayMatrix(sumOfMarices(matrix1, matrix2));
