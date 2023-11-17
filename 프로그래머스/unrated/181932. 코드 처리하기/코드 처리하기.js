
const solution = (code) => {
  let ret = "";
  let mode = 0;
  const arr = [...code];
  for (let i = 0; i < arr.length; i++) {
    if (mode === 0) {
      if (arr[i] !== "1" && i % 2 === 0) ret += arr[i];
      if (arr[i] === "1") mode = 1;
    } else {
      if (arr[i] !== "1" && i % 2 !== 0) ret += arr[i];
      if (arr[i] === "1") mode = 0;
    }
  }
  if (!ret.length) return "EMPTY";
  return ret;
};