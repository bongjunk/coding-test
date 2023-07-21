const solution = (arr, k) => {
  let answer = [];

  arr.forEach((el) => {
    if (k % 2 === 0) {
      return answer.push(el + k);
    } else {
      return answer.push(el * k);
    }
  });
  return answer;
};