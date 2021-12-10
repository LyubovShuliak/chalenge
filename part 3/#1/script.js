const p = document.querySelector("p").innerHTML;

const g = p.split(" ");
let hj = {};
for (let i = 0; i < g.length; i++) {
  for (let j = 0; j < g[i].length; j++) {
    if (g[i][j] === "0") {
      if (hj[j] === undefined) {
        hj[j] = -1;
      }
      hj[j] += -1;
    }
    if (g[i][j] === "1") {
      if (hj[j] === undefined) {
        hj[j] = 1;
      }
      hj[j] += 1;
    }
  }
}
let gamma = parseInt(
  Object.values(hj)
    .map((e) => (e > 0 ? 0 : 1))
    .join(""),
  2
);
let epsilon = parseInt(
  Object.values(hj)
    .map((e) => (e > 0 ? 1 : 0))
    .join(""),
  2
);
console.log(gamma * epsilon);
