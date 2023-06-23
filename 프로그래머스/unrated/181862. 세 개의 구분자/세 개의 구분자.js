const solution = (myStr) => {
  let answer = [];
  const str = myStr.split(/a|b|c/g).filter((el) => el);
  str.length === 0 ? answer.push("EMPTY") : answer.push(...str);
  return answer;
};
