const p = document.querySelector("p").innerHTML;

let g = p.match(/\w+/gm)

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
let pfd = Object.values(hj);
let life_support = g
let oxygen =g
for (let l = 0; l < pfd.length; l++) {
  if (pfd[l] < 0) {
    life_support = life_support.filter((el) => el[l] === "1");
    console.log(g);
  }
  if (pfd[l] > 0) {
    life_support = life_support.filter((el) => el[l] === "0");
  }
}

console.log(g);


