const solution = (str_list) => {
  let answer = str_list;
  for (let i = 0; i < str_list.length; i++) {
    const fIdx = str_list.findIndex((el) => el === "l" || el === "r");
    if (fIdx === -1) return [];
    if (str_list[fIdx] === "l") {
      answer = str_list.slice(0, fIdx);
    } else if (str_list[fIdx] === "r") {
      answer = str_list.slice(fIdx + 1, str_list.length);
    }
  }
  return answer;
};