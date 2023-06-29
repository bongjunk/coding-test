const solution = (s) => {
  let answer = true;
  if (s.length === 4 || s.length === 6) {
    [...s].every((el) => (isNaN(el) ? (answer = false) : (answer = true)));
  } else {
      answer = false;
  }
  return answer;
};