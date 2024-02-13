function numberTriangle(rows) {
  for (let i = 0; i < rows; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      str += `${i + 1} `;
    }
    console.log(str);
  }
}

let rows = parseInt(prompt("Enter number of rows : "));
numberTriangle(rows);
