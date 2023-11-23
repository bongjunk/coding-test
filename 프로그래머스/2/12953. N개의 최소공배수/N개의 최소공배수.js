const gcd = (num1, num2) => {
  while (num2 > 0) {
    let tem = num2;
    num2 = num1 % num2;
    num1 = tem;
  }
  return num1;
};

const lcm = (num1, num2) => {
  return (num1 * num2) / gcd(num1, num2);
};

const solution = (arr) => {
  let answer = 1;
  for (let i = 0; i < arr.length; i++) {
    answer = lcm(answer, arr[i]);
  }
  return answer;
};