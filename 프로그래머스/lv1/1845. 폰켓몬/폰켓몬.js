const solution = (nums) => {
  const count = nums.filter((el, idx) => {
    return nums.indexOf(el) === idx;
  });

  return count.length >= nums.length / 2 ? nums.length / 2 : count.length;
};
