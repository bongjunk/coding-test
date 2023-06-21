const solution = (intStrs, k, s, l) => {
  let answer = [];
  intStrs.forEach((el) => {
    const slice = el
      .split("")
      .slice(s, s + l)
      .join("");
    if (slice > k) answer.push(Number(slice));
  });
  return answer;
};
