// creating objects in JS
const person = {
  name: "Ved",
  age: 18,
  location: "Ahmedabad",
  hobbies: ["coding", "reading", "chess"],
  isStudent: true,
};

console.log(person);

// accessing values
// -> Dot notation
console.log(`Name of person is ${person.name}`);
// -> Bracket notation
console.log(`And he lives in ${person.location}`);
// generally  we use DOT NOTATION and BRACKET are used with arrays

// adding and updating objecy
person.college = "Aditya Silver Oak Institute of Technology";
person.hobbies.push("music");

// DELETING a property from object
delete person.isStudent;
console.log(person);

// we can also add FUNCTIONS to objects
person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};
console.log(person);
person.greet();
// NOTE : we use THIS keyword to access parent object depending on currect scope
