const solution = (clothes) => {
  let answer = 1;
  let clothe = {};

  clothes.forEach((el, idx) => {
    const [name, kind] = el;

    if (clothe.hasOwnProperty(kind)) {
      clothe[kind] ++;
    } else {
      clothe[kind] = 1;
    }
    return answer;
  });

  for (let i in clothe) {
    answer *= (clothe[i] + 1);
  }

  return answer - 1;
};