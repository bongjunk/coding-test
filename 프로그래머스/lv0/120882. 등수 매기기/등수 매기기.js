const solution = (score) => {
  let answer = [];

  score.forEach((el) => {
    const [eng, math] = el;
    const avg = (eng + math) / 2;
    answer.push(avg);
  });

  let rank = new Array(answer.length).fill(1);

  for (let i = 0; i < answer.length; i++) {
    for (let j = 0; j < answer.length; j++) {
      if (answer[i] < answer[j]) rank[i]++;
    }
  }
  return rank;
};