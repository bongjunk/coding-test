const solution = (n, slicer, num_list) => {
  let answer = [];
  switch (n) {
    case 1:
      answer.push(...num_list.slice(0, slicer[1] + 1));
      break;
    case 2:
      answer.push(...num_list.slice(slicer[0], num_list.length));
      break;
    case 3:
      answer.push(...num_list.slice(slicer[0], slicer[1] + 1));
      break;
  }
  let arr = [];
  if (n === 4) {
    arr.push(...num_list.slice(slicer[0], slicer[1] + 1));
    arr.forEach((el, idx) => {
      idx % slicer[2] === 0 && answer.push(el);
    });
  }

  return answer;
};