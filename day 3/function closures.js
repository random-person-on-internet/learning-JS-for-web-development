function createCounter() {
  let count = 0; // Private variable

  function increment() {
    count++; // Accessing private variable from inner function
    return count;
  }

  return increment; // Return the inner function (closure)
}

// Create two counter instances
const counter1 = createCounter();
const counter2 = createCounter();

// Calling the returned function (closure) to increment and retrieve counts
console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2
console.log(counter2()); // Output: 1
console.log(counter2()); // Output: 2

// Each instance has its own private count due to closure
