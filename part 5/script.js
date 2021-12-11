let sff = document.querySelector("p").innerText;

let mainArr = sff
  .match(/(\d+)[,](\d+)\s->\s(\d+)[,](\d+)/gm)
  .map((e) => e.match(/\d+/g).map((esfs) => +esfs));
let fd = [];
mainArr.forEach((e) => {
  fd.push({ 0: [+e[0], +e[1]], 1: [+e[2], +e[3]] });
});

let counter = [];
let finalArrHorizontal = fd
  .map((e) => Object.values(e))
  .filter((el, id, aarr) => aarr[id][0][0] === aarr[id][1][0])
  .sort((a, b) => {
    if (a[0][0] === b[0][0]) {
      counter = counter.concat([a].concat(b));
    }
    return Math.max(a[1][1], a[0][1]) - Math.max(b[0][1], b[1][1]);
  });

let fg = [];
finalArrHorizontal.forEach((eld) => {
  let arr = [eld[0][1], eld[1][1]].sort((a, b) => a - b);
  let fd = [];
  for (let k = arr[0]; k <= arr[1]; k++) {
    fd.push({ [k]: 1 });
  }
  fg.push({ [eld[0][0]]: [...fd] });
});
let count = [];

let finalArrVertical = fd
  .map((e) => Object.values(e))
  .filter((el, id, aarr) => aarr[id][0][1] === aarr[id][1][1])
  .sort((a, b) => {
    if (a[0][0] === b[0][0]) {
        count = count.concat([a].concat(b));
    }
    return Math.max(a[1][0], a[0][0]) - Math.max(b[0][0], b[1][1]);
  });

let jh = [];
finalArrVertical.forEach((eld) => {
  let arr = [eld[0][0], eld[1][0]].sort((a, b) => a - b);
  let fd = [];
  for (let k = arr[0]; k <= arr[1]; k++) {
    fd.push({ [k]: 1 });
  }
  jh.push({ [eld[0][1]]: [...fd] });
});

console.log(fg);

console.log(jh);
console.log(count);