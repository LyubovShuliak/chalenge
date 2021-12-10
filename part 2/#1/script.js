const p = document.querySelector("p").innerHTML;
console.log(p);

const g = p.match(/(\w+)\s([0-9]+)/gm).map((e) => {
  let s = e.match(/([a-z]+)/gm)[0];
  let f = +e.match(/([0-9]+)/gm)[0];
  return { [s]: f };
});
let horisontal = 0;
let depth = 0;
for (let i = 0; i < g.length; i++) {
  if (Object.keys(g[i])[0] === "forward") {
    console.log(g[i]["up"]);
    horisontal += g[i]["forward"];
  }
  if (Object.keys(g[i])[0] === "down") {
    depth += g[i]["down"];
  }
  if (Object.keys(g[i])[0] === "up") {
    depth -= g[i]["up"];
  }
}
console.log(horisontal * depth);
