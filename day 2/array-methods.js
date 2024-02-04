const arr = [1, 2, 3, 4, 5];

//=======================================================
// ARRAY METHODS

// push() => vastu nakhe
arr.push(6);
console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]

// pop() => vastu kadhe
arr.pop();
console.log(arr); // [ 1, 2, 3, 4, 5 ]

// unshift() => aagad nakhe
arr.unshift(0);
console.log(arr); // [ 0, 1, 2, 3, 4, 5 ]

// shift() => aagad thi kadhe
arr.shift();
console.log(arr); // [ 1, 2, 3, 4, 5 ]

// reverse() => naam tevu kaam
arr.reverse();
console.log(arr); // [ 5, 4, 3, 2, 1 ]
arr.reverse();

//=======================================================
// RETURNING VALUES FROM ARRAY

// includes() => ko vstu chhe ke nai kai dey
console.log(arr.includes(5)); // true
console.log(arr.includes(6)); // false

// indexOf() => index aape element nu
console.log(arr.indexOf(4)); //3

// make string => toString() and join()
const arr2 = arr;
const arr3 = arr;
console.log(arr2.toString()); // "1,2,3,4,5"
console.log(arr3.join()); // "1,2,3,4,5"

//=======================================================
// SLICE() AND SPLICE()

// slice() => starting anne ending index thi katko aape
console.log(arr.slice(1, 3)); // [ 2, 3 ]
console.log(arr); // [ 1, 2, 3, 4, 5 ]

// splice() => starting anne ketla kadhva e nakhvanu
console.log(arr.splice(1, 3)); // [ 2, 3, 4 ]
console.log(arr); // [ 1, 5 ]
// NOTE : SPLICE MODIFIES ORIGINAL ARRAY SO BE CAREFUL

//=======================================================
// CHAINING METHODS => combining methods

const newArr = [1, 2, 3, 4, 5];
let x = arr.concat(newArr).reverse();
console.log(x);
x = newArr.slice(1, 3).toString();
console.log(x);
