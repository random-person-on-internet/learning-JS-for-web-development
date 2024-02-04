function registerUser(user) {
  return user + " is registered";
}
console.log(registerUser("Ved"));

// default parameters
function getSum(a = 0, b = 0) {
  return a + b;
}
console.log(getSum(8));

// Rest params =>
function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5));

// passing Object =>
function registerUser(user) {
  console.log(`User ${user.id} (${user.name}) has been reistered`);
}
const user = {
  id: 1,
  name: "Ved",
};
registerUser(user);

// passing Arrays =>
function getRandomFromArray(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];
  return item;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getRandomFromArray(numbers));
