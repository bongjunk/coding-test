const solution = (dots) => {
  let answer = 0;
  const x = [dots[0][0], dots[1][0], dots[2][0], dots[3][0]];
  const y = [dots[0][1], dots[1][1], dots[2][1], dots[3][1]];
  answer =
    (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y));
  return answer;
};
