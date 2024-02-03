function isPalindrome(str) {
  let rev = str.split("").reverse().join("");
  if (rev == str) {
    return true;
  }
  return false;
}

let input = prompt("Enter string : ");
console.log(isPalindrome(input));
