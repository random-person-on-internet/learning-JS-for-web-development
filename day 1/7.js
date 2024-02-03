function reverseString(str) {
  let n = str.length;
  n /= 2;
  for (let i = 0; i < n; i++) {
    let temp = str[i];
    str[i] = str[str.length - i - 1];
    str[str.length - i - 1] = temp;
  }
  return str;
}

let input = prompt("Enter string : ");
let reversed = reverseString(input);
console.log(reversed);

// will not work as STRING IN JS ARE IMMUTABLE
