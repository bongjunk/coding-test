const solution = (my_string, overwrite_string, s) => {
  let answer = "";
  const str = [...my_string];
  str.splice(s, overwrite_string.length, overwrite_string);
  answer = str.join("");
  return answer;
};