const solution = (people, limit) => {
  let answer = 0;
  const arr = people.sort((a, b) => b - a);
  for (let i = 0, j = arr.length - 1; i <= j; i++) {
    if (arr[i] + arr[j] <= limit) {
      j--;
    }
    answer++;
  }
  return answer;
};