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

// 특별한 이차원 배열 2
const solution140 = (arr: any) => {
  let answer = true;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] !== arr[j][i]) {
        answer = false;
      }
    }
  }
  console.log("answer", answer);
  return ~~answer;
};

solution140([
  [5, 192, 33],
  [192, 72, 95],
  [33, 95, 999],
]);
solution140([
  [19, 498, 258, 587],
  [63, 93, 7, 754],
  [258, 7, 1000, 723],
  [587, 754, 723, 81],
]);

const solution141 = (arr: number[], intervals: any) => {
  let answer: any = [];
  intervals.forEach((el: any) => {
    answer.push(...arr.slice(el[0], el[1] + 1));
  });
  console.log("answer", answer);
  return answer;
};

solution141(
  [1, 2, 3, 4, 5],
  [
    [1, 3],
    [0, 4],
  ]
); // [2, 3, 4, 1, 2, 3, 4, 5]

// 팩토리얼
const solution142 = (n: number) => {
  let answer = 1;
  let prod = 1;
  for (let i = 1; i <= n; i++) {
    prod *= i;
    if (n >= prod) {
      answer = i;
    }
    if (n === prod) {
      answer = i;
    }
  }
  console.log("answer", answer);
  return answer;
};

solution142(3628800);
solution142(7);

// 특별한 이차원 배열 1
const solution143 = (n: any) => {
  const arr = Array.from({ length: n }, () => Array(n).fill(0));
  arr.map((el, idx) => {
    el.map((element, index) => {
      if (index === idx) {
        return (el[index] = 1);
      } else {
        return element;
      }
    });
  });
  console.log("arr", arr);
  return arr;
};

solution143(3); // [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
solution143(6); // [[1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1]]
solution143(1); // [[1]]

// 가까운 수
const solution144 = (array: any, n: any) => {
  let answer = 0;
  let min = 0;
  let deg: any = [];
  array.sort((a: any, b: any) => a - b);

  array.forEach((el: any, idx: number) => {
    deg.push(Math.abs(n - el[idx]));
    min = Math.min(...deg);
    answer = deg.indexOf(min);
  });

  return array[answer];
};

solution144([3, 10, 28], 20); // 28
solution144([10, 11, 12], 13); // 12

// 등차수열의 특정한 항만 더하기
const solution145 = (a: any, d: any, included: boolean[]) => {
  let answer = 0;
  let arr: any = [];
  // arr.push(a, (a += d));
  console.log("arr", arr);
  for (let i = 1; i <= included.length; i++) {
    console.log("i", i);
  }
  return answer;
};

solution145(3, 4, [true, false, false, true, true]);
solution145(7, 1, [false, false, false, true, false, false, false]);

// 진료 순서 정하기
const solution146 = (emergency: any) => {
  let answer: any = [];
  emergency.map(
    (el: any) =>
      emergency
        .slice()
        .sort((a: any, b: any) => b - a)
        .indexOf(el) + 1
  );
  return answer;
};

solution146([3, 76, 24]);
solution146([1, 2, 3, 4, 5, 6, 7]);
solution146([30, 10, 23, 6, 100]);

// 문자열 잘라서 정렬하기
const solution147 = (myString: string) => {
  let answer: any = [];
  myString
    .split("x")
    .sort()
    .filter((el) => el !== null && el !== undefined && el !== "");
  return answer;
};

solution147("axbxcxdx");
solution147("dxccxbbbxaaaa");

// 수열과 구간 쿼리 3
const solution148 = (arr: any, queries: any) => {
  queries.map((el: any) => {
    const [i, j] = el;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  });
  return arr;
};

solution148(
  [0, 1, 2, 3, 4],
  [
    [0, 3],
    [1, 2],
    [1, 4],
  ]
); // [3, 4, 1, 0, 2]

// 수 조작하기 2
const solution149 = (numLog: any) => {
  let answer = "";
  const obj: any = {
    "1": "w",
    "-1": "s",
    "10": "d",
    "-10": "a",
  };
  console.log("obj", obj);

  return numLog
    .slice(1)
    .reduce(
      (acc: any, cur: any, idx: any) =>
        acc + obj[numLog[idx + 1] - numLog[idx]],
      ""
    );
};

solution149([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]);

// 숨어있는 숫자의 덧셈 (2)
const solution150 = (my_string: any) => {
  let answer: any = 0;
  console.log(my_string.split(""));
  console.log(
    "isNaN",
    [...my_string].map((el: any) => {
      !isNaN(el) ? (answer += Number(el)) : 0;
    })
  );

  // if (isNaN(my_string.split(""))) {
  //   console.log("my_string", my_string);
  // }
  console.log("answer", answer);
  return answer;
};

solution150("aAb1B2cC34oOp");
solution150("1a2b3c4d123Z");

// 정수를 나선형으로 배치하기
const solution151 = (n: any) => {
  let answer: any = [[]];
  const arr = Array.from({ length: n }, () => Array(n).fill(0));
  // const arr2 = Array.from({ length: n }, () => Array(n).fill(0));
  for (let i = 1; i <= n ** 2; i++) {
    console.log("i", i);
    arr.push([i]);
  }
  console.log("Math.sqrt(n)", n ** 2);
  console.log("arr", arr);
  console.log("answer", answer);
  return answer;
};

solution151(4);
solution151(5);
