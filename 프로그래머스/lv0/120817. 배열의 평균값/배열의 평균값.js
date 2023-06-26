const solution = (numbers) => {
  let answer = 0;
  numbers.reduce((acc, cur) => {
    return (answer = acc + cur);
  });
  return answer / numbers.length;
};