const solution = (arr, query) => {
  for (let i = 0; i < query.length; i++) {
    if (i % 2 !== 0) {
      arr.splice(0, query[i]);
    } else {
      arr.splice(query[i] + 1);
    }
  }
  return arr;
};