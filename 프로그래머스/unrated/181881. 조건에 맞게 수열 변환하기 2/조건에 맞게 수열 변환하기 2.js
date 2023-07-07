const solution = (arr) => {
  let answer = 0;
  let prev = arr;

  while (true) {
    const req = prev.map((el) => {
      if (el > 50 && el % 2 === 0) {
        return el / 2;
      } else if (el < 50 && el % 2 === 1) {
        return el * 2 + 1;
      } else {
        return el;
      }
    });
    const same = prev.every((el, i) => el === req[i]);
    if (same) {
      break;
    } else {
      answer++;
      prev = req;
    }
  }
  return answer;
};