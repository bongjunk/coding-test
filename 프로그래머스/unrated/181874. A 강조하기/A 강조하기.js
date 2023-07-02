const solution = (myString) => {
  let answer = "";
  answer = myString
    .split("")
    .map((el) => {
      if (el === "a" || el === "A") {
        return "A";
      } else {
        return el.toLowerCase();
      }
    })
    .join("");
  return answer;
};