const solution = (arr, queries) => {
  let answer = [];
  for (let item of queries) {
    const [s, e, k] = item;
    let seq = arr
      .filter((el, idx) => idx >= s && idx <= e && el > k)
      .sort((a, b) => a - b)[0];
    answer.push(seq ? seq : -1);
  }
  return answer;
};