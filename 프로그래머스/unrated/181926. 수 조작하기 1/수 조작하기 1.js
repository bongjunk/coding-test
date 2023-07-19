const solution = (n, control) => {
  let answer = 0;

  const maniNum = {
    w: +1,
    s: -1,
    d: +10,
    a: -10,
  };

  const split = control.split("");

  split.reduce((acc, cur) => {
    return (answer = acc + maniNum[cur]);
  }, n);

  console.log("answer", answer);

  return answer;
};