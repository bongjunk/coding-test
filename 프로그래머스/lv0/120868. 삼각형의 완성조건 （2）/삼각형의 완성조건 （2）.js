const solution = (sides) => {
  let answer = 0;
  answer = Math.min(...sides) * 2 - 1;
  return answer;
};
