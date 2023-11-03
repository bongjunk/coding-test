const solution = (n, words) => {
  let turn = 1;

  for (let i = 1; i < words.length; i++) {
    const cur = (i % n) + 1;
    if (words[i - 1].slice(-1) !== words[i][0]) return [cur, turn];
    if (words.findIndex((el) => el === words[i]) !== i)
      return [cur, turn];
    if (cur === n) turn += 1;
  }
  return [0, 0]
};
