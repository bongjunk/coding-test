const solution = (num_list) => {
  let answer = 0;
  num_list.forEach((el) => {
    let cnt = 0;
    while (el !== 1) {
      el % 2 === 0 ? (el /= 2) : (el = (el - 1) / 2);
      cnt++;
    }
    answer += cnt;
  });
  return answer;
};