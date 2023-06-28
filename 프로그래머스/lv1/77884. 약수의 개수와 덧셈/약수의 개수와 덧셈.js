const solution = (left, right) => {
  let answer = 0;

  const divide = (num) => {
    let cnt = 0;
    for (let j = 1; j <= num; j++) {
      if (num % j === 0) {
        cnt++;
      }
    }
    return cnt;
  };

  for (let i = left; i <= right; i++) {
    divide(i) % 2 === 0 ? (answer += i) : (answer -= i);
  }

  return answer;
};