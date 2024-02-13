function numberPyramid(rows) {
  for (let i = 0; i < rows; i++) {
    let str = "";

    // add spaces
    let spaces = rows;
    for (; spaces > i + 1; spaces--) {
      str += " ";
    }

    // add numbers in rev till 1 OR add spaces+1 numbers
    for (let j = spaces; j > 0; j--) {
      str += `${j}`;
    }

    // add same numbers on right
    for (let j = 2; j <= spaces; j++) {
      str += `${j}`;
    }

    console.log(str);
  }
}

let rows = parseInt(prompt("Enter number of elements : "));
numberPyramid(rows);
