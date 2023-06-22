const solution = (n) => {
  let answer = 0;

  if (n < 3) return;
  for (let i = 0; i < n; i++) {
    if (n % i === 1) {
      return (answer = i);
    }
  }

  return answer;
};