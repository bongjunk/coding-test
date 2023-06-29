const solution = (price, money, count) => {
  let answer = 0;
  let acc = 0;
  for (let i = 1; i <= count; i++) {
    acc += i * price;
  }
  answer = acc > money ? acc - money : 0;

  return answer;
};