/*
- 최댓값과 최솟값

- 문제 설명
문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.

- 제한사항
s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.
*/

const solution30 = (s: any) => {
  let answer: any = "";
  const arr = s.split(" ").sort((a: any, b: any) => a - b);
  const arrMap = arr.map((el: any) => Number(el));
  const min = Math.min(...arrMap);
  const max = Math.max(...arrMap);
  answer = min.toString() + " " + max.toString();

  console.log("answer", answer);
  return answer;
};

solution30("1 2 3 4");
solution30("-1 -2 -3 -4");
solution30("-1 -1");
