const solution = (num) => {
  let answer = 0;
  while (num !== 1) {
    if (num % 2 === 0) {
      num /= 2;
    } else if (num % 2 !== 0) {
      num = num * 3 + 1;
    } else {
      return answer;
    }
    answer++;
  }
  answer > 500 ? (answer = -1) : answer;
  return answer;
};
