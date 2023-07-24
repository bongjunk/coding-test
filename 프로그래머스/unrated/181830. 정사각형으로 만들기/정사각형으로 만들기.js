const solution = (arr) => {
  const arrLen = arr.length;
  const arrColLen = arr[0].length;
  if (arrLen > arrColLen) {
    return arr.map((el) => [
      ...el,
      ...new Array(arrLen - arrColLen).fill(0),
    ]);
  } else if (arrLen < arrColLen) {
    for (let i = 0; i < arrColLen - arrLen; i++) {
      arr.push(new Array(arrColLen).fill(0));
    }
  } else {
    return arr;
  }
  return arr;
};