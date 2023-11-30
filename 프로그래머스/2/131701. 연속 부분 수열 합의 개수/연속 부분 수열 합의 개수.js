const solution = (elements) => {
  let answer = 0;
  const set = new Set();
  for (let i = 1; i <= elements.length; i++) {
    let sum = 0;
    for (let j = 0; j < elements.length; j++) {
      if (j === 0) {
        sum = elements.slice(0, i).reduce((acc, cur) => acc + cur, 0);
      } else {
        sum -= elements[j - 1];
        sum += elements[(j + i - 1) % elements.length];
      }
      set.add(sum);
    }
  }

  return set.size;
};
