const solution = (food) => {
  let ans = "";
  let answer = "";
  for (let i = 0; i < food.length; i++) {
    ans += String(i).repeat(Math.floor(food[i] / 2));
  }
  answer += ans + 0 + [...ans].reverse().join("");
  return answer;
};