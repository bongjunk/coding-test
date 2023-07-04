const solution = (A, B) => {
  let answer = 0;
  const aArr = A.sort((a, b) => a - b);
  const bArr = B.sort((a, b) => b - a);

  for (let i = 0; i < aArr.length; i++) {
    answer += aArr[i] * bArr[i];
  }

  return answer;
};