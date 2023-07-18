const solution = (num_list) => {
  let answer = 0;
  num_list.reduce((acc, cur) => {
    if (num_list.length >= 11) {
      return (answer = acc + cur);
    } else {
      return (answer = acc * cur);
    }
  });
  return answer;
};