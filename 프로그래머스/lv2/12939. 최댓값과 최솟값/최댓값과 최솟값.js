const solution = (s) => {
  let answer = "";
  const arr = s.split(" ").sort((a, b) => a - b);
  const arrMap = arr.map((el) => Number(el));
  const min = Math.min(...arrMap);
  const max = Math.max(...arrMap);
  answer = min.toString() + " " + max.toString();

  return answer;
};