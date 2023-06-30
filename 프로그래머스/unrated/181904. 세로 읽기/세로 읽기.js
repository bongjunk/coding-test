const solution = (my_string, m, c) => {
  let answer = "";
  for (let i = 0; i < my_string.length / m; i++) {
    for (let j = 0; j < m; j++) {
      if (j + 1 === c) answer += my_string[i * m + j];
    }
  }
  return answer;
};
