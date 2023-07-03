const solution = (strArr) => {
  let result = {};
  let maxArr = [];
  strArr.forEach((el) => {
    maxArr.push(el.length);
  });
  for (let len of maxArr) {
    result[len] = (result[len] ?? 0) + 1;
  }
  const val = Object.values(result).map((r) => r);
  return Math.max(...val);
};
