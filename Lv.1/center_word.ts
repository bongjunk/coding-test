/*
- 가운데 글자 가져오기

- 문제 설명
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 
단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

- 제한사항
s는 길이가 1 이상, 100이하인 스트링입니다.
*/

const solution6 = (s: string) => {
  let answer = "";

  if (s.length % 2 === 0) {
    answer = s.slice(s.length / 2 - 1, s.length / 2 + 1);
  } else {
    answer = s.slice(s.length / 2, s.length / 2 + 1);
  }
  console.log("answer", answer);
  return answer;
};

solution6("abcde");
solution6("fkjoj");
solution6("afewoibjjea");
solution6("abcdefeeqe");
solution6("qwer");
