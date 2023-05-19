// 주사위의 개수
const solution131 = (box: number[], n: number) => {
  let answer = 0;
  answer =
    Math.floor(box[0] / n) * Math.floor(box[1] / n) * Math.floor(box[2] / n);
  console.log("answer", answer);
  return answer;
};

solution131([1, 1, 1], 1); // 1
solution131([10, 8, 6], 3); // 12

// 접미사인지 확인하기
const solution132 = (my_string: any, is_suffix: any) => {
  let answer = 0;
  answer =
    [...my_string]
      .reverse()
      .join("")
      .indexOf([...is_suffix].reverse().join("")) === 0
      ? 1
      : 0;
  console.log("answer1", answer);
  return answer;
};

solution132("banana", "ana");
solution132("banana", "nan");
solution132("banana", "wxyz");
solution132("banana", "abanana");

// 문자열 바꿔서 찾기
const solution133 = (myString: string, pat: string) => {
  let answer = 0;
  answer = [...myString]
    .map((el) => (el === "A" ? "B" : "A"))
    .join("")
    .includes(pat)
    ? 1
    : 0;
  console.log("answer", answer);
  return answer;
};

solution133("ABBAA", "AABB");
solution133("ABAB", "ABAB");

const solution134 = (str_list: string[], ex: string) => {
  let answer = "";
  str_list.forEach((el) => {
    if (!el.includes(ex)) answer += el;
  });
  console.log("answer", answer);
  return answer;
};

solution134(["abc", "def", "ghi"], "ef");
solution134(["abc", "bbc", "cbc"], "c");

const solution135 = (numbers: number[]) => {
  let answer = 0;
  numbers.sort((a, b) => b - a);
  numbers[0] * numbers[1] >
  numbers[numbers.length - 1] * numbers[numbers.length - 2]
    ? (answer = numbers[0] * numbers[1])
    : (answer = numbers[numbers.length - 1] * numbers[numbers.length - 2]);
  console.log("nubmers", numbers);
  console.log("answer", answer);
  return answer;
};

// 최댓값 만들기 (2)
solution135([1, 2, -3, 4, -5]);
solution135([0, -31, 24, 10, 1, 9]);
solution135([10, 20, 30, 5, 5, 20, 5]);

const solution136 = (my_string: any) => {
  let answer: any = [];
  [...my_string].forEach((el: any) => !isNaN(el) && answer.push(Number(el)));
  console.log("answer", answer);
  return answer;
};

solution136("hi12392");
solution136("p2o4i8gj2");
solution136("abcde0");

// 배열의 길이에 따라 다른 연산하기
const solution137 = (arr: number[], n: number) => {
  let answer: any = [];
  arr.forEach((el, idx) => {
    if (arr.length % 2 !== 0 && idx % 2 === 0) {
      answer.push((el += n));
    } else if (arr.length % 2 === 0 && idx % 2 !== 0) {
      answer.push((el += n));
    } else {
      answer.push(el);
    }
  });

  console.log("answer", answer);
  return answer;
};

solution137([49, 12, 100, 276, 33], 27);
solution137([444, 555, 666, 777], 100);

// 접미사 배열
const solution138 = (my_string: any) => {
  let answer: any = [];
  const suf = [...my_string]
    .reduce((acc, cur, idx) => {
      return [...acc, my_string.slice(idx, my_string.length)];
    }, [])
    .sort();
  answer.push(...suf);
  console.log("answer", answer);
  return answer;
};

solution138("banana"); // ["a", "ana", "anana", "banana", "na", "nana"]
solution138("programmers"); // ["ammers", "ers", "grammers", "mers", "mmers", "ogrammers", "programmers", "rammers", "rogrammers", "rs", "s"]

// function solution139(my_string) {
//   const strLen = my_string.length;
//   return [...my_string]
//     .reduce((acc, cur, idx) => {
//       const curStr = my_string.slice(idx, strLen);
//       return [...acc, curStr];
//     }, [])
//     .sort();
// }

// solution139("banana");
// solution139("programmers");

// 합성수 찾기
const solution139 = (n: number) => {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    let cnt = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        console.log("i", i);
        cnt++;
      }
    }
    cnt > 2 && answer++;
  }
  console.log("answer", answer);
  return answer;
};

solution139(10);
solution139(5);
