const solution = (n) => {
  let answer = [];
  let divide = 2;

  while (n >= 2) {
    if (n % divide === 0) {
      answer.push(divide);
      n /= divide;
    } else {
      divide++;
    }
  }

  return [...new Set(answer)];
};