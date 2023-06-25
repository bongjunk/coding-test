const solution = (n, k) => {
  let answer = 0;
  const service = Math.floor(n / 10);
  if (n >= 10) {
    answer = n * 12000 + (k - service) * 2000;
  } else {
    answer = n * 12000 + k * 2000;
  }
  return answer;
};