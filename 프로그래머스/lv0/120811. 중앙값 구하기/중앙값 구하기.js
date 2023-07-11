const solution = (array) => {
  let answer = 0;
  array
    .sort((a, b) => a - b)
    .find((el, idx) => {
      if (Math.floor(array.length / 2) === idx) {
        answer = el;
      }
    });
  return answer;
};