const solution = (k, score) => {
  let answer = [];
  let arr = [];
  for (let i = 0; i < score.length; i++) {
    if (i < k) arr.push(score[i]);
    if (score[i] > Math.min(...arr)) {
      arr.pop();
      arr.push(score[i]);
      arr.sort((a, b) => b - a);
    }
    answer.push(arr.at(-1));
  }
  return answer;
};