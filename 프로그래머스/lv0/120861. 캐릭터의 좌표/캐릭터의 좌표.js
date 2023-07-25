const solution = (keyinput, board) => {
  let answer = [];
  const [row, col] = board;
  let x = 0;
  let y = 0;
  const xRange = Math.floor(row / 2);
  const yRange = Math.floor(col / 2);

  keyinput.forEach((el) => {
    switch (el) {
      case "left":
        x--;
        break;
      case "right":
        x++;
        break;
      case "up":
        y++;
        break;
      case "down":
        y--;
        break;
    }
    if (Math.abs(x) > xRange) x = x > 0 ? xRange : xRange * -1;
    if (Math.abs(y) > yRange) y = y > 0 ? yRange : yRange * -1;
  });
  answer.push(x, y);
  return answer;
};