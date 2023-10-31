const solution = (l, r) => {
  let arr = [];
  for (let i = l; i <= r; i++) {
    if (i % 5 !== 0) continue;
    if (![...i.toString()].every((r) => r === "5" || r === "0")) continue;
    arr.push(i);
  }
  return arr.length ? arr : [-1];
};