const solution = (n) => {
  let answer = 0;
  answer = Math.sqrt(n);
  return Number.isInteger(answer) ? Math.pow(answer + 1, 2) : -1;
};
