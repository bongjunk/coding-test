const solution = (rank, attendance) => {
  let arr = [];
  let rankArr = [];

  for (let i = 0; i < rank.length; i++) {
    if (attendance[i]) arr.push(rank[i]);
  }

  arr.sort((a, b) => a - b);

  for (let i = 0; i <= 2; i++) {
    rankArr.push(rank.indexOf(arr[i]));
  }

  return 10000 * rankArr[0] + 100 * rankArr[1] + rankArr[2];
};