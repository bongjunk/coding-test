const solution = (numbers) => {
  let answer = 0;

  const num = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  num.forEach((el, idx) => {
    numbers = numbers.split(el).join(idx);
    answer = Number(numbers);
  });
  return answer;
};
