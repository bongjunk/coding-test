const solution = (k, tangerine) => {
  let answer = 0;
  let obj = {};
  tangerine.forEach((el, _) => {
    obj[el] = (obj[el] || 0) + 1;
  });
  let objArr = Object.values(obj).sort((a, b) => b - a);
  for (let i = 0; i < objArr.length; i++) {
    answer++;
    if (k > objArr[i]) {
      k -= objArr[i];
    } else {
      break;
    }
  }
  return answer;
};