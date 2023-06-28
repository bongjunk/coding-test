const solution = (i, j, k) => {
  let answer = 0;
  const num = [];

  for (let k = i; k <= j; k++) {
    num.push(k);
  }

   [
    ...num
      .toString()
      .split("")
      .map((el) => {
        if (Number(el) === Number(k)) {
          answer++;
        }
      }),
  ];

  return answer;
};
