const solution = (s) => {
  let arr = [...s];
  let stack = [];
  let answer = [];

  arr.forEach((el, _) => {
    if (!stack.includes(el)) answer.push(-1);
    if (stack.includes(el)) answer.push(stack.length - stack.lastIndexOf(el));
    stack.push(el);
  });
  return answer;
};