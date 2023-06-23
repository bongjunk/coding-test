const solution = (arr, divisor) => {
  let answer = [];

  arr.forEach((el) => {
    if (el % divisor === 0) answer.push(el);
    answer.sort((a, b) => a - b);
  });

  if (answer.length === 0) answer.push(-1);

  console.log("answer", answer);
  return answer;
};