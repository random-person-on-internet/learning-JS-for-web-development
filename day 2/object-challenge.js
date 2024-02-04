// step 1
const library = {
  title: "Ramayan",
  author: "Valmiki",
  status: {
    own: true,
    reading: false,
    read: false,
  },
};
console.log(library);

// step 2
library.status.own = false;
library.status.read = true;
console.log(library);

// step 3
let secondbook = "Mahabharat";
let author2 = "Ved Vyas";
const library2 = {
  secondbook,
  author2,
  status: {
    own: true,
    reading: false,
    read: false,
  },
};
console.log(library2);

// step 4
const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);
