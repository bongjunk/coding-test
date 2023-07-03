const solution = (s) => {
  let answer = 0;
  s.split(" ").forEach((el, idx) => {
    if (el === "Z") {
      answer -= parseInt(s.split(" ")[idx - 1]);
    } else {
      answer += parseInt(el);
    }
  });
  return answer;
};