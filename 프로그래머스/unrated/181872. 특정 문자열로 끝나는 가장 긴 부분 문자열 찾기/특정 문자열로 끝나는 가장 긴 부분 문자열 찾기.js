const solution = (myString, pat) => {
  let answer = "";

  [...myString].forEach((el, idx) => {
    const myStr = myString.slice(0, idx + 1);
    if (myStr.endsWith(pat)) answer = myStr;
  });

  return answer;
};
