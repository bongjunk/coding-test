const solution = (s) => {
  let answer = "";
  const split = s.toLowerCase().split(" ");
  for (let i = 0; i < split.length; i++) {
    for (let j = 0; j < split[i].length; j++) {
      if (j % 2 === 0) {
        answer += split[i][j].toUpperCase();
      } else {
        answer += split[i][j].toLowerCase();
      }
    }
    if (i < split.length - 1) answer += " ";
  }
  return answer;
};