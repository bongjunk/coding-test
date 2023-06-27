const solution = (x) => {
  let answer = true;

  const sum = [...x.toString()].reduce((acc, cur) => {
    return Number(acc) + Number(cur);
  });

  x % sum === 0 ? (answer = true) : (answer = false);

  return answer;
};