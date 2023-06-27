const solution = (s) => {
  let answer = true;
  let pCnt = 0;
  let yCnt = 0;
  [...s.toLowerCase()].forEach((el) => {
    el === "p" ? pCnt++ : el === "y" ? yCnt++ : 0;
  });
  pCnt === yCnt ? (answer = true) : (answer = false);
  return answer;
};