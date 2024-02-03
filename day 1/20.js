const book = {
  title: "Bhagwat Geeta",
  author: "Krishna Bhagwan",
  year_published: "7000BC",
};

for (let key in book) {
  console.log(`${key} : ${book[key]}`);
}
