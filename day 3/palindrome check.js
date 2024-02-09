function isPalindrome(string) {
  let reverseString = string.split("").reverse().join("");
  let ans = reverseString == string ? true : false;
  return ans;
}

let str = prompt("Enter string : ");
console.log(isPalindrome(str));
