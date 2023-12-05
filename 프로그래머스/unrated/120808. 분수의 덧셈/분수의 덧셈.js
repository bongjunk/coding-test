const solution = (numer1, denom1, numer2, denom2) => {
  let answer = [];
  let a = numer1 * denom2 + numer2 * denom1;
  let b = denom1 * denom2;

  const getGCD = (num1, num2) =>
    num1 % num2 === 0 ? num2 : getGCD(num2, num1 % num2);
    
  answer[0] = a / getGCD(a, b);
  answer[1] = b / getGCD(a, b);

  return answer;
};
