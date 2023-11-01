const solution = (polynomial) => {
  const spl = polynomial.split(" + ");
  let num = 0;
  let xNum = 0;

  spl.forEach((el) => {
    if (el.includes("x")) {
      const xSpl = el.split("x");
      if (xSpl[0] === "") {
        xNum++;
      } else {
        xNum += Number(xSpl[0]);
      }
    } else {
      num += Number(el);
    }
  });

  if (xNum !== 0 && num !== 0) return xNum === 1 ? `x + ${num}` : `${xNum}x + ${num}`;
  if (xNum !== 0 && num === 0) return xNum === 1 ? "x" : `${xNum}x`;
  if (xNum === 0 && num !== 0) return `${num}`;
  if (xNum === 0 && num === 0) return '0';
};