const solution = (q, r, code) => {
  let answer = "";
  [...code].map((el, idx) => {
    if (idx % q === r) {
      answer += el;
    }
  });
  return answer;
};