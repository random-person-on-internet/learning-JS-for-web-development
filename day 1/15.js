// find leap years
function isLeapYear(year) {
  if (year % 4 == 0) {
    return true;
  }
  return false;
}

let n = parseInt(prompt("Enter year : "));
if (isLeapYear(n)) {
  console.log("It is a leap year");
} else {
  console.log("It is not a leap year");
}
