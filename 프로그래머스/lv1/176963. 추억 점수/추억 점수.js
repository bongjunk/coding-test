const solution = (name, yearning, photo) => {
  let answer = [];
  const obj = {};
  name.forEach((el, idx) => {
    obj[el] = yearning[idx];
  });

  photo.map((el) => {
    const r = el.reduce((acc, cur) => acc + (obj[cur] || 0), 0);
    answer.push(r);
  });
  return answer;
};