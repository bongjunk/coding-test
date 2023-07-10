const solution = (spell, dic) => {
  let answer = 0;
  dic.forEach((el) => {
    let cnt = 0;
    spell.forEach((r) => {
      el.includes(r) && cnt++;
    });
    cnt === spell.length && answer++;
  });
  return answer ? 1 : 2;
};