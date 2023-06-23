const solution = (array) => {
  let answer = 0;
    array
      .join("")
      .split("")
      .filter((el) => el === "7" && answer++)
  return answer;
};