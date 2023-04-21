/*
- 마지막 두 원소

- 문제 설명
정수 리스트 num_list가 주어질 때, 
마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값을 
마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가하여 return하도록 solution 함수를 완성해주세요.

- 제한사항
2 ≤ num_list의 길이 ≤ 10
1 ≤ num_list의 원소 ≤ 9
*/

const solution16 = (num_list: number[]) => {
  let answer: number[] = [];

  if (num_list[num_list.length - 1] > num_list[num_list.length - 2]) {
    answer.push(
      ...num_list,
      num_list[num_list.length - 1] - num_list[num_list.length - 2]
    );
  } else {
    answer.push(...num_list, num_list[num_list.length - 1] * 2);
  }

  console.log("answer", answer);
  return answer;
};

solution16([2, 1, 6]);
solution16([5, 2, 1, 7, 5]);
