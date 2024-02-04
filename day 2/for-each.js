const socials = ["Twitter", "Facebook", "LinkedIn", "Instagram"];
socials.forEach(function (item) {
  console.log(item);
});
console.log("");

// using => to shorten syntax
socials.forEach((item) => console.log(item));
console.log("");

const socialObjs = [
  { name: "Twitter", url: "https://twitter.com" },
  { name: "Facebook", url: "https://facebook.com" },
  { name: "Instagram", url: "https://instagram.com" },
];
socialObjs.forEach((item) => console.log(item.url));
