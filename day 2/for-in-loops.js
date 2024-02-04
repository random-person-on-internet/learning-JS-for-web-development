/*syntax:
for (let key in object){
    kaik kro
} */

const colors = {
  color1: "red",
  color2: "blue",
  color3: "green",
  color4: "yellow",
  color5: "orange",
  color6: "purple",
};

for (let key in colors) {
  console.log(`${key} => ${colors[key]}`);
}
