const solution = (arr, flag) => {
  let answer = [];
  flag.forEach((el, idx) => {
    if (el) {
      answer.push(...Array(arr[idx] * 2).fill(arr[idx]));
    } else {
      for (let i = 0; i < arr[idx]; i++) {
        answer.pop();
      }
    }
  });
  return answer;
};