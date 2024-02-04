// nesting, concat, spread and array object methods

let fruits = ["mango", "orange", "grapes"];
let berries = ["strawberry", "blueberry", "rasberry"];

//========================================================
// NESTING

fruits.push(berries);
console.log(fruits);
// to access berries ->
console.log(fruits[3][0]); // strawberry

// creating new variable and nest both arrays
fruits = ["mango", "orange", "grapes"];
const allFruits = [fruits, berries];
console.log("All fruits = ");
console.log(allFruits);
console.log(allFruits[0][0]); // mango

//========================================================
// CONCAT()

const newArr = fruits.concat(berries);
console.log(newArr);

//========================================================
// SPREAD OPERATOR(...) -> works same as concat

const newArr2 = [...fruits, ...berries];
console.log(newArr2);

//========================================================
// FLATTEN ARRAY => flat()
// use `Infinity` if u dont want to limit depth

const arr = [1, 2, [3, 4, 5], 6, [7, 8, [9, 10, [11, 12]]]];
x = arr.flat(Infinity);
console.log(x);

//========================================================
// STATIC PROPERTIES ON ARRAY OBJECTS

// Array.isArray() => array che ke nai kai dey
console.log(Array.isArray(arr)); // true
console.log(Array.isArray("Hello")); // false
console.log(Array.isArray([1, 2, 3])); //true

// Array.from() => converts into array
console.log(Array.from("12345")); // [ '1', '2', '3', '4', '5' ]

// Array.of() => converts array from intigers
let a = 1;
let b = 2;
let c = 3;
console.log(Array.of(a, b, c));
