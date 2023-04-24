/*
- 옹알이 (2)

- 문제 설명
머쓱이는 태어난 지 11개월 된 조카를 돌보고 있습니다. 
조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음과 네 가지 발음을 조합해서 만들 수 있는 발음밖에 하지 못하고 연속해서 같은 발음을 하는 것을 어려워합니다. 
문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.

- 제한사항
1 ≤ babbling의 길이 ≤ 100
1 ≤ babbling[i]의 길이 ≤ 30
문자열은 알파벳 소문자로만 이루어져 있습니다.
*/

const solution14 = (babbling: any[]) => {
  let answer = 0;
  const arr = ["aya", "ye", "woo", "ma"];

  // 테스트케이스 1, 11, 14, 16, 17 실패 - 연속된 문자 체크
  // for (let i = 0; i < babbling.length; i++) {
  //   arr.forEach((el) => {
  //     babbling[i] = babbling[i].replace(el, " ");
  //   });
  //   if (babbling[i].replaceAll(" ", "").length === 0) {
  //     answer++;
  //   }
  // }

  const regex = /^(aya|ye|woo|ma)+$/;
  const regex2 = /(aya|ye|woo|ma)\1+/;
  babbling.forEach((el) => {
    if (regex.test(el) && !regex2.test(el)) answer++;
  });
  console.log("answer", answer);
  return answer;
};

solution14(["aya", "yee", "u", "maa"]);
solution14(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]);

const solution22 = (numer1: any, denom1: any, numer2: any, denom2: any) => {
  let answer: any = [];
  console.log(Number(`${numer1} / ${denom1} + ${numer2} / ${denom2}`));
  return answer;
};

solution22(1, 2, 3, 4);
solution22(9, 2, 1, 3);

const solution23 = (n: number, numlist: number[]) => {
  let answer: number[] = [];

  numlist.forEach((el) => {
    if (el % n === 0) {
      answer.push(el);
    }
  });

  console.log("answer", answer);
  return answer;
};

solution23(3, [4, 5, 6, 7, 8, 9, 10, 11, 12]);
solution23(5, [1, 9, 3, 10, 13, 5]);
solution23(12, [2, 100, 120, 600, 12, 12]);

const solution24 = (number: any) => {
  let answer = 0;

  for (let i = 0; i < number.length; i++) {
    answer += parseInt(number[i]);
  }

  // for (let i of number) {
  //   answer += parseInt(number[i]);
  // }

  // for (let i in number) {
  //   answer += parseInt(number[i]);
  // }

  console.log("answer", answer);
  return answer;
};

solution24("123");
solution24("78720646226947352489");

const solution25 = (num_list: any[]) => {
  const sum = num_list.reduce((acc, cur) => {
    return acc + cur;
  });

  const product = num_list.reduce((acc, cur) => {
    return acc * cur;
  });

  if (Math.pow(sum, 2) > product) {
    return 1;
  } else {
    return 0;
  }
};

solution25([3, 4, 5, 2, 1]);
solution25([5, 7, 8, 3]);

const solution26 = (arr1: any, arr2: any) => {
  let answer = 0;

  const sum1 = arr1.reduce((acc: any, cur: any) => acc + cur);
  const sum2 = arr2.reduce((acc: any, cur: any) => acc + cur);

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

  console.log("answer", answer);
  return answer;
};

solution26([49, 13], [70, 11, 2]);
solution26([100, 17, 84, 1], [55, 12, 65, 36]);
solution26([1, 2, 3, 4, 5], [3, 3, 3, 3, 3]);

const solution27 = (arr: any) => {
  let answer: any = [];
  // const includes = (arr: any) => arr.includes(2);
  if (!arr.includes(2)) answer.push(-1);

  console.log("indexOf", arr.indexOf(arr.includes(2)));
  // console.log("length", arr.findIndex(includes));
  console.log("length", arr.includes(2, 2));
  // for (let i = 0; i < arr.length; i++) {
  //   console.log("slice", arr.slice(arr.includes(2), arr.includes(2)));
  //   answer.push(arr.slice(arr.includes(2), arr.includes(2)));
  // }

  console.log("answer", answer);
  return answer;
};

solution27([1, 2, 1, 4, 5, 2, 9]);
solution27([1, 2, 1]);
solution27([1, 1, 1]);
