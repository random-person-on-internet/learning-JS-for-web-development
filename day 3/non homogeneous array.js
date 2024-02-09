let arr = [
  12,
  -9,
  "Ved",
  [1, 2, 3],
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    price: "198 INR",
  },
  undefined,
  true,
];

for (let i in arr) {
  console.log(`${i} => ${typeof arr[i]}`);
}
