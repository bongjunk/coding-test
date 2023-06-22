const solution = (seoul) => {
  let answer = "";

  seoul.findIndex((el, idx) => {
    if (el === "Kim") {
      return (answer = `김서방은 ${idx}에 있다`);
    }
  });

  return answer;
};