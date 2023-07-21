const solution = (num_list) => {
  const sum = num_list.reduce((acc, cur) => {
    return acc + cur;
  });

  const product = num_list.reduce((acc, cur) => {
    return acc * cur;
  });

  if (Math.pow(sum, 2) > product) {
    return 1;
  } else {
    return 0;
  }
};
