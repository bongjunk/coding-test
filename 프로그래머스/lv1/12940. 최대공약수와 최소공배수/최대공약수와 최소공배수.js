const solution = (n, m) => {
  let answer = [];
  const gre = (a, b) => {
    const rem = a % b;
    if (rem === 0) return b;
    return gre(b, rem);
  };
  const las = (a, b) => (a * b) / gre(a, b);
  answer.push(...[gre(n, m), las(n, m)]);
  return answer;
};
