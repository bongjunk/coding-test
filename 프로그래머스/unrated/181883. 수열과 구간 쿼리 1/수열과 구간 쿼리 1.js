const solution = (arr, queries) => {
  let answer = [];
  answer.push(
    ...queries.reduce((acc, cur) => {
      const [s, e] = cur;
      for (let i = s; i <= e; i++) {
        acc[i] += 1;
      }
      return acc;
    }, arr)
  );
  return answer;
};
