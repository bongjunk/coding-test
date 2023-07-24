const solution = (arr) => {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (answer.length === 0) {
      answer.push(arr[i]);
    } else {
      answer[answer.length - 1] === arr[i] ? answer.pop() : answer.push(arr[i]);
    }
  }
  if (answer.length === 0) answer.push(-1);
  return answer;
};