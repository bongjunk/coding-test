const solution = (s) => {
  let answer = true;
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      cnt++;
    } else {
      if (cnt > 0) {
        cnt--;
      } else {
        answer = false;
      }
    }
  }
  if (cnt > 0) answer = false;
  // cnt > 0 ? (answer = false) : (answer = true);
  return answer;
};
