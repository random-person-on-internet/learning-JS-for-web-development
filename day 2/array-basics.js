// array creation
const arr = [374, 755, 398, 118, 289];
console.log(arr);
//second method
const arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr2);

// accessing elements
let sum = arr2[0] + arr2[1] + arr2[2] + arr2[3] + arr2[4];
console.log(`Sum = ${sum}`);

// array of different data types -> POSSIBLE in JS
const mixed = [1, "string", true, null, undefined, [1, 2, 3]];
console.log(mixed);

// LENGTH OF ARRAY, IMP METHOD
console.log(mixed.length); //6

// mutating arrays => arrays are MUTABLE (BADLI SHAKAY)
const fruits = ["mango", "grapes", "apple"];
console.log(fruits);
fruits[fruits.length] = "papaya";
console.log(fruits);
fruits[2] = "banana";
console.log(fruits);