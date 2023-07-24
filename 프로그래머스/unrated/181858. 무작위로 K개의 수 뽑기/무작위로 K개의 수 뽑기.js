const solution = (arr, k) => {
  let answer = [];
  let kArr = [];
  arr.forEach((el, idx) => {
    if (answer.length === k) return answer;
    if (answer.indexOf(arr[idx]) === -1) answer.push(arr[idx]);
  });
  while (answer.length < k) {
    answer.push(-1);
  }
  return answer;
};