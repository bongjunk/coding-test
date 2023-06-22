const solution = (number) => {
  let answer = 0;

  const setNumber = (curr, start) => {
    if (curr.length === 3) {
      return (answer +=
        curr.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0);
    }

    for (let i = start; i < number.length; i++) {
      setNumber([...curr, number[i]], i + 1);
    }
  };

  setNumber([], 0);
  return answer;
};