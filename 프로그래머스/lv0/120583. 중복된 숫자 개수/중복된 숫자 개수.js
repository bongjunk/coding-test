const solution = (array, n) => {
  let answer = 0;
  array.forEach((el) => {
    el === n && answer++;
  })
  return answer;
};