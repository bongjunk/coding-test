const solution = (s) => {
  const arr = [...s];
  const stack = [];
  arr.forEach((el, _) => {
    if (stack[stack.length - 1] === el) {
      stack.pop();
    } else {
      stack.push(el);
    }
  });
  return stack.length === 0 ? 1 : 0;
};