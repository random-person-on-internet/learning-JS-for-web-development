function starTriangle(rows) {
  for (let i = 0; i < rows; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      str += "* ";
    }
    console.log(str);
  }
}

let n = parseInt(prompt("Rows : "));
starTriangle(n);
