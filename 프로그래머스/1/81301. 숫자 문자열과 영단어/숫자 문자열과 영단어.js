const solution = (s) => {
  let answer = s;
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

  num.forEach((_, idx) => {
    answer = answer.split(num[idx]).join(idx);
  });
  return Number(answer);
};