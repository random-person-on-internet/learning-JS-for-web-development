/*syntax : 
for (variable of iterable){
    kaik kro
} */

const arr = [1, 2, 3, 4, 5];
for (const number of arr) {
  console.log(number);
}
const greet = "Krishnam Vande Jagatgurum";
for (const letter of greet) {
  console.log(letter);
}

const map = new Map();
map.set("name", "Ved");
map.set("age", 18);
for (const [key, value] of map) {
  console.log(`${key} : ${value}`);
}
