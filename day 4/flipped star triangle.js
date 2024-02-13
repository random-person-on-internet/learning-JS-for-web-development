function flipppedStarTriangle(rows) {
  for (let i = 0; i < rows; i++) {
    let str = "";
    for (let j = rows; j > i; j--) {
      str += "* ";
    }
    console.log(str);
  }
}

let n = parseInt(prompt("Enter number of rows : "));
flipppedStarTriangle(n);
