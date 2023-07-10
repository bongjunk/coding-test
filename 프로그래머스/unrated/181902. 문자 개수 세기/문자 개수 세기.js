const solution = (my_string) => {
  let arr = new Array(52).fill(0);
  let i = 0;

  [...my_string].forEach((el) => {
    el.charCodeAt() >= 97
      ? (i = el.charCodeAt() - 71)
      : (i = el.charCodeAt() - 65);
    arr[i] = arr[i] ?? 0;
    arr[i]++;
  });
  return arr;
};