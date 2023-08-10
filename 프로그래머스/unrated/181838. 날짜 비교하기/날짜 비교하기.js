const solution = (date1, date2) => {
  let answer = 0;
  const dateO = new Date(date1);
  const dateT = new Date(date2);
  answer = dateO < dateT ? 1 : 0;
  return answer;
}