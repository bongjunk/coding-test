const solution = (d, budget) => {
  let answer = 0;
  let acc = 0;
  d.sort((a, b) => a - b).forEach((el, idx) => {
    answer++;
    acc += d[idx];
    if (acc > budget) {
      answer--;
    }
  });
  return answer;
};