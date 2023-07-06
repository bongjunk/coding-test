const solution = (arr) => {
  let answer = [...arr];
  let arrLen = 1;
  while (arrLen < arr.length) arrLen *= 2;
  for (let i = 0; i < arrLen - arr.length; i++) {
    answer.push(0);
  }
  return answer;
};