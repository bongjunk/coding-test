const solution = (money) => {
  let answer = [];
  const price = 5500;
  const cnt = Math.floor(money / price);
  const rem = money - price * cnt;
  answer.push(cnt, rem);
  return answer;
};