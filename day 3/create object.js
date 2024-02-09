const person = {
  name: "Ved",
  age: 18,
  hobbies: ["Web Development", "Drawing", "Chess"],
};

for (let property in person) {
  console.log(`${property} => ${person[property]}`);
}
