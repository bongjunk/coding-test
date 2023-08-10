const solution = (arr, delete_list) => {
  let answer = [];

  delete_list.forEach((el) => {
    if (arr.includes(el)) {
      return arr.splice(arr.indexOf(el), 1);
    } else {
      return arr;
    }
  });
  answer.push(...arr);
  return answer;
};