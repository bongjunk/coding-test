const solution = (my_string, queries) => {
  let answer = [];
  queries.forEach((el) => {
    const arr = [...my_string];
    const [start, end] = el;
    const rev = arr
      .slice(start, end + 1)
      .reverse()
      .join("");
    arr.splice(start, end - start + 1, rev);
    my_string = arr.join("");
  });
  answer = my_string;
  return answer;
};