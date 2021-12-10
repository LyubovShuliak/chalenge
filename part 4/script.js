let gf = document.querySelector("p").innerText;
let numbers = document.querySelector("div").innerText.match(/\d/g);

let gdf = gf
  .match(/(\w+\s){25}/gm)
  .map((e) => e.match(/(\w+\s){5}/gm).map((el) => el.trim().split(" ")));
let count = 6;
for (let i = 0; i < count; i++) {
  const element = array[i];
}
