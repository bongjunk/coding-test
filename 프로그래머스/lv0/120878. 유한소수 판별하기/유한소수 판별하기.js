const solution = (a, b) => {
  let answer = 0;
  let gcd = 0;
  for (let i = 1; i <= b; i++) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }
  b /= gcd;
  while (b % 2 === 0) {
    b /= 2;
  }
  while (b % 5 === 0) {
    b /= 5;
  }
  answer = b === 1 ? 1 : 2;
  return answer;
};