// challenge 1 :

let arr = [1, 2, 3, 4, 5];
arr.push(6);
arr.unshift(0);
arr.reverse();
console.log(arr);

// challenge 2 :

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [5, 6, 7, 8, 9, 10];
arr1.pop();
let arr3 = [...arr1, ...arr2];
console.log(arr3);
