const solution = (chicken) => {
  let answer = chicken;
  let sev = 0;
  while (answer >= 10) {
    sev += Math.floor(answer / 10);
    answer = Math.floor(answer / 10) + (answer % 10);
  }
  return sev;
};