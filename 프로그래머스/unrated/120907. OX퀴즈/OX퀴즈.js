const solution = (quiz) => {
  let answer = [];
  for (let i = 0; i < quiz.length; i++) {
    let [left, right] = quiz[i].split("=");
    eval(left) === Number(right) ? answer.push("O") : answer.push("X");
  }
  return answer;
};