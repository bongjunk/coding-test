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

const solution32 = (myString: any) => {
  let answer: any = [];
  if (myString.includes("x")) {
    console.log(myString.includes("x"));
  }
  console.log("search", myString.search("x"));
  return answer;
};

solution32("oxooxoxxox");
solution32("xabcxdefxghi");

const solution33 = (my_string: any, alp: any) => {
  let answer = "";
  answer = my_string.replaceAll(alp, alp.toUpperCase());
  return answer;
};

solution33("programmers", "p");
solution33("lowercase", "x");

const solution34 = (my_string: any) => {
  let answer: any = [];
  console.log(my_string.split(" "));
  return answer;
};

solution34("i love you");
solution34("programmers");

const solution35 = (binomial: any) => {
  let answer: any = 0;
  // console.log(new Function(binomial));
  const eval1 = new Function()();
  // eval(binomial);
  // console.log("binomial", eval(binomial));
  return eval1;
};

solution35("43 + 12");
solution35("0 - 7777");
solution35("40000 * 40000");

const solution36 = (str1: any, str2: any) => {
  let answer = "";
  let arr = [];
  for (let i = 0; i < str1.length; i++) {
    answer += str1[i] + str2[i];
    // for (let j = i; j < str2.length; j++) {
    //   console.log(str2[j]);
    //   answer += str1[i] + str2[i];
    // }
  }
  console.log("answer", answer);
  return answer;
};

solution36("aaaaa", "bbbbb");

const solution37 = (my_string: any, s: number, e: number) => {
  let answer = "";
  const start = my_string.substring(0, s);
  const split = my_string
    .split("")
    .slice(s, e + 1)
    .reverse()
    .join("");
  const end = my_string.substring(e + 1, my_string.length);

  answer = start + split + end;
  console.log("answer", answer);
  return answer;
};

solution37("Progra21Sremm3", 6, 12);
solution37("Stanley1yelnatS", 4, 10);

const solution38 = (my_string: any, queries: any) => {
  let answer = "";

  queries.forEach((el: any) => {
    const [s, e]: any = el;
    console.log(s, e);

    const start = my_string.substring(0, s);
    const slice = my_string
      .split("")
      .slice(s, e + 1)
      .reverse()
      .join("");
    const end = my_string.substring(e + 1, my_string.length);

    console.log("start", start, "end", end);

    answer = start + slice + end;
  });

  console.log("answer38", answer);
  return answer;
};

solution38("rermgorpsam", [
  [2, 3],
  [0, 7],
  [5, 9],
  [6, 10],
]);

const solution39 = (a: any, b: any, c: any) => {
  let answer = 0;
  const sum = a + b + c;
  const squared = Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2);
  const pow = Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3);

  if (a !== b && b !== c && a !== c) {
    answer = sum;
  } else if (a === b && b === c && a === c) {
    answer = sum * squared * pow;
  } else {
    answer = sum * squared;
  }

  console.log("answer", answer);
  return answer;
};

solution39(2, 6, 1);
solution39(5, 3, 3);
solution39(4, 4, 4);

const solution40 = (my_string: string, k: number) => {
  let answer = "";

  for (let i = 0; i < k; i++) {
    answer += my_string;
  }

  // 쉬운방법
  // console.log(my_string.repeat(k));

  console.log("answer", answer);
  return answer;
};

solution40("string", 3);
solution40("love", 10);

const solution41 = (n: any, control: any) => {
  let answer = 0;

  const maniNum: any = {
    w: +1,
    s: -1,
    d: +10,
    a: -10,
  };

  const split = control.split("");

  split.reduce((acc: any, cur: any) => {
    return (answer = acc + maniNum[cur]);
  }, n);

  console.log("answer", answer);

  return answer;
};

solution41(0, "wsdawsdassw");

const solution42 = (numLog: any) => {
  let answer = "";
  console.log("numLog", numLog);
  console.log("numLogSlice", numLog.slice(1));

  // const maniNum: any = {
  //   w: +1,
  //   s: -1,
  //   d: +10,
  //   a: -10,
  // };

  const maniNum: any = {
    "+1": "w",
    "-1": "s",
    "+10": "d",
    "-10": "a",
  };

  // numLog.forEach((el: any) => {
  //   // console.log("el", el[0]);
  // });

  numLog.slice(1).reduce((acc: any, cur: any, idx: any) => {
    console.log("acc", acc, "cur", cur);
    console.log("numLog[idx]", numLog[idx]);
    if (undefined) return null;
    return (answer = acc + maniNum[numLog[idx] - numLog[idx - 1]]);
  }, "");

  // console.log("numLog.slice(1)", numLog.slice(1));
  console.log("answer", answer);

  return answer;
};

solution42([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]);
// "wsdawsdassw"

// const solution43 = (numLog: any) => {
//   const controller = {
//     "1": "w",
//     "-1": "s",
//     "10": "d",
//     "-10": "a",
//   };
//   console.log(
//     "answer",
//     numLog
//       .slice(1)
//       .reduce(
//         (acc: any, cur: any, idx: any) =>
//           acc + controller[`${numLog[idx + 1] - numLog[idx]}`],
//         ""
//       )
//   );
//   return numLog
//     .slice(1)
//     .reduce(
//       (acc: any, cur: any, idx: any) =>
//         acc + controller[`${numLog[idx + 1] - numLog[idx]}`],
//       ""
//     );
// };

// solution43([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]);

// 배열 만들기4
const solution45 = (arr: any) => {
  let stk: any[] = [];
  let i = 0;

  console.log("stk.length", stk.length, "i", i);

  while (i < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[i]);
      i++;
    } else if (stk.length !== 0 && stk[stk.length - 1] < arr[i]) {
      stk.push(arr[i]);
      i++;
    } else if (stk.length !== 0 && stk[stk.length - 1] >= arr[i]) {
      stk.pop();
    } else {
      break;
    }
  }

  console.log("iii", i);
  console.log("stk", stk);
  return stk;
};

solution45([1, 4, 2, 5, 3]);

// 문자열의 뒤의 n글자
const solution46 = (my_string: string, n: number) => {
  let answer = "";

  answer = my_string.substring(my_string.length - n);
  console.log("answer", answer);
  return answer;
};

solution46("ProgrammerS123", 11); // grammerS123
solution46("He110W0r1d", 5); // W0r1d

// 배열 만들기 2
const solution47 = (l: any, r: any) => {
  let answer: any[] = [];
  let arr: any[] = [];
  // const regExp = /^[0,5]+$/;
  for (let i = l; i <= r; i++) {
    arr.push(i);
  }
  // if (arr.includes(0) && arr.includes(5)) {
  //   answer.push(arr);
  // }
  answer.push(arr.includes(5));
  // console.log("include", arr.includes(5));
  // console.log("arr", arr);
  // console.log("arr.includes", arr.includes(0) && arr.includes(5));
  // console.log("answer", answer);
  return answer;
};

solution47(5, 555);
solution47(10, 20);

// 홀수 vs 짝수
const solution48 = (num_list: any) => {
  let answer = 0;
  let even = 0;
  let odd = 0;

  num_list.forEach((el: any, idx: any) => {
    idx++;
    if (idx % 2 === 0) {
      even += el;
    } else {
      odd += el;
    }
  });

  even > odd ? (answer = even) : (answer = odd);
  console.log("answer", answer);
  return answer;
};

solution48([4, 2, 6, 1, 7, 6]);
solution48([-1, 2, 5, 6, 3]);

const solution49 = (my_string: any, index_list: any) => {
  let answer = "";
  const split = my_string.split("");

  index_list.forEach((el: any) => {
    answer += split.slice(el, el + 1);
  });

  console.log("answer", answer);
  return answer;
};

solution49("cvsgiorszzzmrpaqpe", [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7]);
solution49("zpiaz", [1, 2, 0, 0, 3]);

const solution50 = (num_list: any, n: any) => {
  let answer: any = [];
  answer = num_list.slice(n - 1, num_list.length);
  console.log("answer", answer);
  return answer;
};

solution50([2, 1, 6], 3);
solution50([5, 2, 1, 7, 5], 2);

// 순서 바꾸기
const solution51 = (num_list: any, n: any) => {
  let answer: any = [];
  answer = num_list.slice(n).concat(num_list.slice(0, n));
  console.log("answer", answer);
  return answer;
};

solution51([2, 1, 6], 1);
solution51([5, 2, 1, 7, 5], 3);

// n개 간격의 원소들
const solution52 = (num_list: any, n: any) => {
  let answer: any = [];
  num_list.forEach((el: any, idx: any) => {
    console.log("ell", el);
    if (idx % n === 0) {
      answer.push(el);
    } else {
      null;
    }
  });
  console.log("answer", answer);
  return answer;
};

solution52([4, 2, 6, 1, 7, 6], 2);
solution52([4, 2, 6, 1, 7, 6], 4);

// 배열의 원소만큼 추가하기
const solution53 = (arr: any) => {
  let answer: any = [];
  arr.forEach((el: any) => {
    for (let i = 0; i < el; i++) {
      answer.push(el);
    }
  });
  console.log("answer", answer);
  return answer;
};

solution53([5, 1, 4]);
solution53([6, 6]);
solution53([1]);

// 배열에서 문자열 대소문자 변환하기
const solution54 = (strArr: any) => {
  let answer: any = [];
  strArr.forEach((el: any, idx: any) => {
    if (idx % 2 === 0) {
      answer.push(el.toLowerCase());
    } else {
      answer.push(el.toUpperCase());
    }
  });
  console.log("answer", answer);
  return answer;
};

solution54(["AAA", "BBB", "CCC", "DDD"]);
solution54(["aBc", "AbC"]);

// 길이에 따른 연산
const solution55 = (num_list: any) => {
  let answer = 0;
  num_list.reduce((acc: any, cur: any) => {
    if (num_list.length > 11) {
      return (answer = acc + cur);
    } else {
      return (answer = acc * cur);
    }
  });
  console.log("answer", answer);
  return answer;
};

solution55([3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1]); // 51
solution55([2, 3, 4, 5]); // 120

// A 강조하기
const solution56 = (myString: any) => {
  let answer: any = "";

  answer = myString
    .split("")
    .map((el: any) => {
      if (el === "a" || el === "A") {
        return "A";
      } else {
        return el.toLowerCase();
      }
    })
    .join("");

  // 축약방법
  // myString.toLowerCase().replaceAll("a", "A");
  console.log("answer", answer);
  return answer;
};

solution56("abstract algebra");
solution56("PrOgRaMmErS");

// 첫 번째로 나오는 음수
const solution57 = (num_list: any) => {
  let answer = 0;
  answer = num_list.findIndex((v: any) => v < 0);
  console.log("answer", answer);
  return answer;
};

solution57([12, 4, 15, 46, 38, -2, 15]);
solution57([13, 22, 53, 24, 15, 6]);

const solution58 = (n_str: any) => {
  let answer = "";
  answer = Number(n_str).toString();
  console.log("answer", answer);
  return answer;
};

solution58("0010");
solution58("854020");

const solution59 = (a: number, b: number) => {
  let answer = 0;
  if (a % 2 !== 0 && b % 2 !== 0) {
    answer = Math.pow(a, 2) + Math.pow(b, 2);
  } else if ((a % 2 !== 0 && b % 2 === 0) || (a % 2 === 0 && b % 2 !== 0)) {
    answer = 2 * (a + b);
  } else {
    answer = Math.abs(a - b);
  }
  console.log("answer", answer);
  return answer;
};

solution59(3, 5);
solution59(6, 1);
solution59(2, 4);

const solution60 = (date1: any, date2: any) => {
  let answer = 0;
  const dateO = new Date(date1);
  const dateT = new Date(date2);
  answer = dateO < dateT ? 1 : 0;
  console.log("answer", answer);
  return answer;
};

solution60([2021, 12, 28], [2021, 12, 29]);
solution60([1024, 10, 24], [1024, 10, 24]);

const solution61 = (arr: number[], k: number) => {
  let answer: number[] = [];

  arr.forEach((el: number) => {
    if (k % 2 === 0) {
      return answer.push(el + k);
    } else {
      return answer.push(el * k);
    }
  });
  console.log("answer", answer);
  return answer;
};

solution61([1, 2, 3, 100, 99, 98], 3);
solution61([1, 2, 3, 100, 99, 98], 2);

const solution62 = (myString: any) => {
  let answer = "";
  const alphabet = myString.split("");
  alphabet.forEach((el: any) => {
    if (el < "l") {
      answer += el.replace(el, "l");
    } else {
      answer += el;
    }
  });
  console.log("answer", answer);
  return answer;
};

solution62("abcdevwxyz");
solution62("jjnnllkkmm");

const solution63 = (num_str: any) => {
  let answer = 0;
  // console.log(num_str.split("").((el: any) => el + el));
  num_str.split("").reduce((acc: any, cur: any) => {
    return (answer = Number(acc) + Number(cur));
  });
  console.log("answer", answer);
  return answer;
};

solution63("123456789");
solution63("1000000");

const solution64 = (num_list: number[]) => {
  let answer: number[] = [];
  console.log(num_list.sort((a, b) => a - b).splice(5, num_list.length - 1));
  return answer;
};

solution64([12, 4, 15, 46, 38, 1, 14, 56, 32, 10]);

const solution65 = (arr: any, delete_list: any) => {
  let answer: number[] = [];
  console.log("arr", arr.includes(1001));
  // if (arr.includes(delete_list)) {
  //   console.log(arr.splice(delete_list, 1));
  // }

  delete_list.forEach((el: any) => {
    console.log("el", el);
    console.log(arr.includes(el));
    if (arr.includes(el)) {
      return arr.splice(arr.indexOf(el), 1);
    } else {
      return arr;
    }
  });
  answer.push(...arr);
  console.log("answer", answer);
  return answer;
};

solution65([293, 1000, 395, 678, 94], [94, 777, 104, 1000, 1, 12]);
solution65([110, 66, 439, 785, 1], [377, 823, 119, 43]);

const solution66 = (picture: any, k: any) => {
  let answer: any = [];

  for (let i = 0; i < picture.length; i++) {
    for (let j = 0; j < k; j++) {
      answer.push(
        picture[i]
          .split("")
          .map((el: any) => el.repeat(k))
          .join("")
      );
    }
  }

  console.log("picture", picture);

  console.log("answer", answer);
  return answer;
};

solution66(
  [
    ".xx...xx.",
    "x..x.x..x",
    "x...x...x",
    ".x.....x.",
    "..x...x..",
    "...x.x...",
    "....x....",
  ],
  2
);
solution66(["x.x", ".x.", "x.x"], 3);

const solution67 = (my_string: any, num1: any, num2: any) => {
  let answer = "";
  const split = my_string.split("");
  let temp = split[num1];
  split[num1] = split[num2];
  split[num2] = temp;
  answer = split.join("");
  console.log("answer", answer);
  return answer;
};

solution67("hello", 1, 2);
solution67("I love you", 3, 6);

const solution68 = (s1: any, s2: any) => {
  let answer = 0;
  answer = s1.filter((r: any) => s2.includes(r)).length;
  console.log("answer", answer);
  return answer;
};

solution68(["a", "b", "c"], ["com", "b", "d", "p", "c"]);
solution68(["n", "omg"], ["m", "dot"]);

const solution69 = (message: string) => {
  let answer = 0;
  console.log(message.length * 2);
  return answer;
};

solution69("happy birthday!");
solution69("I love you~");

// 자릿수 더하기
const solution70 = (n: any) => {
  let answer = 0;
  n.toString()
    .split("")
    .reduce((acc: any, cur: any) => {
      return (answer = Number(acc) + Number(cur));
    });

  console.log("answer", answer);
  return answer;
};

solution70(1234);
solution70(930211);

// 암호 해독
const solution71 = (cipher: string, code: number) => {
  let answer = "";
  cipher.split("").forEach((el: any, idx: number) => {
    if ((idx + 1) % code === 0) {
      answer += el;
    }
  });
  console.log("answer", answer);
  return answer;
};

solution71("dfjardstddetckdaccccdegk", 4);
solution71("pfqallllabwaoclk", 2);

// 369
const solution72 = (order: any) => {
  let answer = 0;
  console.log(order.toString().split(""));
  order
    .toString()
    .split("")
    .forEach((el: any) => {
      if (el.includes(3) || el.includes(6) || el.includes(9)) {
        answer++;
      }
    });
  console.log("answer", answer);
  return answer;
};

solution72(3);
solution72(29423);

// 가장 큰 수 찾기
const solution73 = (array: number[]) => {
  let answer: any = [];

  answer.push(Math.max(...array), array.indexOf(Math.max(...array)));
  console.log("answer", answer);
  return answer;
};

solution73([1, 8, 3]);
solution73([9, 10, 11, 8]);

// 중복된 문자 제거
const solution74 = (my_string: string) => {
  let answer = "";
  const dup = new Set(my_string);
  dup.forEach((el: any) => (answer += el));
  console.log("answer", answer);
  return answer;
};

solution74("people");
solution74("We are the world");

// 숫자 찾기
const solution75 = (num: any, k: any) => {
  let answer = 0;
  answer = num.toString().indexOf(k) + 1 || -1;
  console.log("answer", answer);
  return answer;
};

solution75(29183, 1);
solution75(232443, 4);
solution75(123456, 7);

// A로 B 만들기
const solution76 = (before: any, after: any) => {
  let answer = 0;
  answer =
    before.split("").sort().join("") === after.split("").sort().join("")
      ? 1
      : 0;
  return answer;
};

solution76("olleh", "hello");
solution76("allpe", "apple");

const solution77 = (my_string: string) => {
  let answer = "";
  my_string.split("").map((el, idx) => {
    if (el === el.toLowerCase()) {
      answer += el.toUpperCase();
    } else {
      answer += el.toLowerCase();
    }
  });
  console.log("answer", answer);
  return answer;
};

solution77("cccCCC");
solution77("abCdEfghIJ");

// const solution = (my_string) => {
//   let answer = "";
//   my_string.split("").map((el, idx) => {
//     if (el === el.toLowerCase()) {
//       answer += el.toUpperCase();
//     } else {
//       answer += el.toLowerCase();
//     }
//   });
//   return answer;
// };

const solution78 = (num_list: any) => {
  let answer = 0;
  num_list.map((el: any) => {
    return el % 2 === 1 ? (answer = el) : null;
  });
  console.log("answer", answer);
  return answer;
};

solution78([3, 4, 5, 2, 1]);
solution78([5, 7, 8, 3]);

const solution79 = (array: number[], n: number) => {
  let answer = 0;

  array.forEach((el: any, idx: any) => {
    el === n && answer++;
  });

  console.log("answer", answer);
  return answer;
};

solution79([1, 1, 2, 3, 4, 5], 1);
solution79([0, 2, 3, 4], 1);

const solution80 = (array: number[], height: number) => {
  let answer = 0;
  answer = array.filter((r) => r > height).length;
  console.log("answer", answer);
  return answer;
};

solution80([149, 180, 192, 170], 167);
solution80([180, 120, 140], 190);

// 중앙값 구하기
const solution81 = (array: number[]) => {
  let answer = 0;
  array
    .sort((a, b) => a - b)
    .find((el, idx) => {
      if (Math.floor(array.length / 2) === idx) {
        answer = el;
      }
    });
  console.log("answer", answer);
  return answer;
};

solution81([1, 2, 7, 10, 11]);
solution81([9, -1, 0]);

// 피자 나눠 먹기 (1)
const solution82 = (n: number) => {
  let answer = 0;
  console.log("nn", n % 7 === 0 ? Math.floor(n / 7) : Math.floor(n / 7) + 1);
  answer = n % 7 === 0 ? Math.floor(n / 7) : Math.floor(n / 7) + 1;
  console.log("answer", answer);
  return answer;
};

solution82(7);
solution82(1);
solution82(15);

// 배열의 평균값
const solution83 = (numbers: number[]) => {
  let answer = 0;
  numbers.reduce((acc, cur) => {
    return (answer = acc + cur);
  });
  return answer / numbers.length;
};

solution83([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
solution83([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]);

// 모스부호 (1)
const solution84 = (letter: any) => {
  let answer = "";
  const morse: any = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
  };

  letter.split(" ").map((el: any) => {
    console.log("elel", el);
    answer += morse[el];
  });

  console.log("answer", answer);
  return answer;
};

solution84(".... . .-.. .-.. ---");
solution84(".--. -.-- - .... --- -.");

// 가위 바위 보
const solution85 = (rsp: string) => {
  let answer = "";
  rsp.split("").forEach((el: any) => {
    answer += el === "2" ? 0 : el === "0" ? 5 : 2;
  });
  console.log("answer", answer);
  return answer;
};

solution85("2");
solution85("205");

// 각도기
const solution86 = (angle: number) => {
  let answer = 0;
  answer =
    angle < 90 ? 1 : angle === 90 ? 2 : 90 < angle && angle < 180 ? 3 : 4;
  console.log("answer", answer);
  return answer;
};

solution86(70);
solution86(91);
solution86(180);

const solution87 = (strlist: string[]) => {
  let answer: number[] = [];
  strlist.forEach((el) => {
    answer.push(el.length);
  });
  // 간단한 방법
  // strlist.map((r) => r.length)
  console.log("answer", answer);
  return answer;
};

solution87(["We", "are", "the", "world!"]);
solution87(["I", "Love", "Programmers."]);

// 세균 증식
const solution88 = (n: number, t: number) => {
  let answer = 0;
  for (let i = 0; i <= t; i++) {
    answer = Math.pow(2, t) * n;
  }
  // console.log(n << t);
  console.log("answer", answer);
  return answer;
};

solution88(2, 10);
solution88(7, 15);

const solution89 = (numbers: number[], n: number) => {
  return numbers.reduce((acc, cur) => {
    return acc <= n ? acc + cur : acc;
  });
};

solution89([34, 5, 71, 29, 100, 34], 123); // 139
solution89([58, 44, 27, 10, 100], 139); // 239
