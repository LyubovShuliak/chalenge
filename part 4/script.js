let gf = document.querySelector("p").innerText;
let numbers = document.querySelector("div").innerText.match(/\d+/g);

let playersArrray = gf
  .match(/(\w+\s){25}/gm)
  .map((e) => e.match(/(\w+\s){5}/gm).map((el) => el.trim().split(" ")));

// console.log(playersArrray);
let winersTurns = [];
for (let kj = 0; kj < playersArrray.length; kj++) {
  let b = [];
  for (let index = 0; index < playersArrray[kj].length; index++) {
    let d = Object.fromEntries(
      playersArrray[kj][index].map((e, i, arr) => [i, [e]])
    );
    if (!b.length) {
      b.push(d);
    } else {
      for (let i = 0; i < playersArrray[kj][index].length; i++) {
        Object.defineProperty(b[0], i, {
          value: [playersArrray[kj][index][i], ...b[0][i]],

          writable: true,
        });
      }
    }
  }

  winersTurns.push(
    Math.min(
      ...Object.values(b[0])
        .map((sfsf) => Math.max(...sfsf.map((fgdg) => numbers.indexOf(fgdg))))
        .concat(
          playersArrray[kj].map((sfsf) =>
            Math.max(...sfsf.map((fgdg) => numbers.indexOf(fgdg)))
          )
        )
    )
  );
}

const winerFateNumber = numbers[Math.min(...winersTurns)];
const loserFateNumber = numbers[Math.max(...winersTurns)];
const winnerIdx = winersTurns.indexOf(Math.min(...winersTurns));
const bigestLooserIdx = winersTurns.indexOf(Math.max(...winersTurns));
const winner = playersArrray[winnerIdx];
const bigestLooser = playersArrray[bigestLooserIdx];
const winnerDefiner =
  playersArrray[winnerIdx].flat(2).reduce((fdf, dgdg) => {
    if (numbers.indexOf(dgdg) > Math.min(...winersTurns)) {
      return Number(fdf) + Number(dgdg);
    }
    return Number(fdf);
  }, 0) * winerFateNumber;

const looserDefiner =
  playersArrray[bigestLooserIdx].flat(2).reduce((fdf, dgdg) => {
    if (numbers.indexOf(dgdg) > Math.max(...winersTurns)) {
      return Number(fdf) + Number(dgdg);
    }
    return Number(fdf);
  }, 0) * loserFateNumber;
console.log(winnerDefiner);

console.log(looserDefiner);

