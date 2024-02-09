let target = Math.floor(Math.random() * 100) + 1;
// console.log(target);

let guesses = 10;
let guess = parseInt(prompt("Enter your guess (b/w 1 and 100) : "));

while (guesses > 0) {
  if (guess < target) {
    guess = parseInt(prompt("Too Low!"));
  } else if (guess > target) {
    guess = parseInt(prompt("Too high!"));
  } else {
    alert("You got it!");
    break;
  }
  guesses--;
}

if (guesses == 0) {
  alert("You failed! Try again later :)");
}
