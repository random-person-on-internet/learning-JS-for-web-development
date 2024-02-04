const todo = new Object();
todo.id = 1;
todo.title = "Learn JS";
todo.completed = false;

//==================================================
// NESTING OBJECTS (objects in objects)

let person = {
  address: {
    coords: {
      lat: 12345,
      lng: 43210,
    },
  },
};
console.log(person);
// to access elements:
console.log(person.address.coords.lng);

//==================================================
// SPREAD OPERATOR
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 1, d: 4 };
const obj3 = { obj1, obj2 };
console.log(obj3);

// we can do same with Object.assign() method
const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);
// it shows there's an empty object (first para) into which we want to spread the objects

const obj5 = { ...obj1, ...obj2 };
console.log(obj5);

//==================================================
// BASIC FUNCTIONS
person = {
  name: "Ved",
  age: 18,
  location: "Ahmedabad",
  hobbies: ["coding", "reading", "chess"],
  isStudent: true,
};
// length() => no intro needed
console.log(`Length = ${Object.keys(person).length}`);
// keys()
console.log(`Keys = ${Object.keys(person)}`);
// values()
console.log(`Values = ${Object.values(person)}`);
// entries()
console.log(`Key-Value pairs = ${Object.entries(person)}`);

// hasOwnProperty() => checking if certain property exists
console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("birth date")); // false
