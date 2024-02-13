function numberTriangle(rows) {
  for (let i = 0; i < rows; i++) {
    let str = "";
    let num = i + 1;
    for (let j = 0; j <= i; j++) {
      str += `${num--}`;
    }
    console.log(str);
  }
}

let n = parseInt(prompt("Enter number of rows : "));
numberTriangle(n);
