function numberTriangle(rows) {
  let num = 1;
  for (let i = 0; i < rows; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      str += `${num++} `;
    }
    console.log(str);
  }
}

let n = parseInt(prompt("Enter number of rows : "));
numberTriangle(n);
