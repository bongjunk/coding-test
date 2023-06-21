const solution = (common) => {
  let answer = 0;
   common[1] - common[0] === common[2] - common[1]
      ? (answer = common[common.length - 1] + (common[1] - common[0]))
      : (answer = common[common.length - 1] * (common[1] / common[0]))
  return answer;
};