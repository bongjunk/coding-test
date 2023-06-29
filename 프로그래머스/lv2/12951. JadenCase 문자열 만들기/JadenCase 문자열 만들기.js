const solution = (s) => {
  let answer = "";
  answer += s
    .toLowerCase()
    .split(" ")
    .map((el) => {
      return el.charAt(0).toUpperCase() + el.substring(1);
    })
    .join(" ");

  return answer;
};