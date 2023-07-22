const solution = (array, commands) => {
  let answer = [];
  commands.forEach((el) => {
    const [i, j, k] = el;
    const command = array.slice(i - 1, j).sort((a,b) => a-b);
    command.filter((el, idx) => {
      if (idx === k - 1) {
        answer.push(el);
      } else {
          return;
      }
    });
  });
  return answer;
};