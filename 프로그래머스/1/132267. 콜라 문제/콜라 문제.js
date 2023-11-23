const solution = (a, b, n) => {
  let answer = 0;
  while (a <= n) {
    let coke = Math.floor(n / a) * b;
    answer += coke;
    n = coke + (n % a);
  }
  return answer;
};
