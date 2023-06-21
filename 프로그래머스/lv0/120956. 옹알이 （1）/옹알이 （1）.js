const solution = (babbling) => {
  let answer = 0;

  const regex = /^(aya|ye|woo|ma)+$/;
  const regex2 = /(aya|ye|woo|ma)\1+/;
  babbling.forEach((el) => {
    if (regex.test(el) && !regex2.test(el)) answer++;
  });
  return answer;
};