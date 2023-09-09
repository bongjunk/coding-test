const solution = (arr1, arr2) => {
  let answer = 0;

  const sum1 = arr1.reduce((acc, cur) => acc + cur);
  const sum2 = arr2.reduce((acc, cur) => acc + cur);

    if (arr1.length < arr2.length) {
    answer = -1;
  } else if (arr1.length > arr2.length) {
    answer = 1;
  } else if (arr1.length === arr2.length && sum1 > sum2) {
    answer = 1;
  } else if (arr1.length === arr2.length && sum1 < sum2) {
    answer = -1;
  } else {
    answer = 0;
  }



  return answer;
};