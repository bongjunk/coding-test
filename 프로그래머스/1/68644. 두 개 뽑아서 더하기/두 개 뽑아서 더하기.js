const solution = (numbers) => {
  let arr = [];
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      arr.push(Number(numbers[i]) + Number(numbers[j]));
    }
  }
  arr.filter((el, idx) => {
    if (arr.indexOf(el) === idx) return answer.push(el);
  });
  return answer.sort((a, b) => a - b);
};
