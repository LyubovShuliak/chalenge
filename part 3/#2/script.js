const p = document.querySelector("p").innerHTML;

let a = p.match(/\w+/gm);
let g = p.match(/\w+/gm);
let count = 1;

for (let i = 0; i < count; i++) {
  let zero = g.filter((e) => e[i] === "0");
  let one = g.filter((e) => e[i] === "1");
  g = zero.length <= one.length ? one : zero;

  if (g.length > 1) {
    count++;
  }
}
let counter = 1;
for (let i = 0; i < counter; i++) {
  let zero = a.filter((e) => e[i] === "0");
  let one = a.filter((e) => e[i] === "1");
  a = zero.length > one.length ? one : zero;
  if (a.length > 1) {
    counter++;
  }
}


console.log(parseInt(a[0], 2)*parseInt(g[0], 2));

