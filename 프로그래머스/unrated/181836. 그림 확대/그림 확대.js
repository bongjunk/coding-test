const solution = (picture, k) => {
  let answer = [];
  for (let i = 0; i < picture.length; i++) {
    for (let j = 0; j < k; j++) {
      answer.push(
        picture[i]
          .split("")
          .map((el) => el.repeat(k))
          .join("")
      );
    }
  }
  return answer;
};