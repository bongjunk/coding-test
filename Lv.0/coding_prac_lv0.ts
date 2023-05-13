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
  // console.log("numLog", numLog);
  // console.log("numLogSlice", numLog.slice(1));

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

  delete_list.forEach((el: any) => {
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

const solution90 = (my_string: string) => {
  return my_string.split(" ").filter((el) => {
    el !== "";
  });
};

solution90(" i    love  you");
solution90("    programmers  ");

// 부분 문자열 이어 붙여 문자열 만들기
const solution91 = (my_strings: any, parts: any) => {
  let answer = "";

  my_strings.forEach((v: any, idx: any) => {
    answer += v.substring(parts[idx][0], parts[idx][1] + 1);
  });

  console.log("answer", answer);
  return answer;
};

solution91(
  ["progressive", "hamburger", "hammer", "ahocorasick"],
  [
    [0, 4],
    [1, 2],
    [3, 5],
    [7, 7],
  ]
);

const solution92 = (n: number, k: number) => {
  let answer: number[] = [];
  for (let i = 1; i <= n; i++) {
    if (i % k === 0) {
      answer.push(i);
    }
  }
  console.log("answer", answer);
  return answer;
};

solution92(10, 3);
solution92(15, 5);

const solution93 = (num_list: number[]) =>
  num_list.sort((a, b) => a - b).splice(0, 5);
solution93([12, 4, 15, 46, 38, 1, 14]);

const solution94 = (n: number) => {
  let answer = 0;
  if (n % 2 !== 0) {
    for (let i = 1; i <= n; i++) {
      i % 2 !== 0 ? (answer += i) : 0;
    }
  } else {
    for (let i = 1; i <= n; i++) {
      i % 2 === 0 ? (answer += Math.pow(i, 2)) : 0;
    }
  }
  console.log("answer", answer);
  return answer;
};

solution94(7);
solution94(10);

const solution95 = (arr: number[], idx: number) => {
  let answer = 0;
  // arr.forEach((el: number, index: number) => {
  //   console.log("same", idx <= index && el === 1);
  //   if (idx <= index) {
  //     if (el === 1) answer = 3;
  //     else answer = -1;
  //   } else {
  //     return (answer = -1);
  //   }
  // });

  for (let i = 1; i <= arr.length; i++) {
    if (idx <= i && arr[i] === 1) {
      if (arr[i] === 1) answer = 3;
    } else {
      answer = -1;
    }
  }
  console.log("answer", answer);
  return answer;
};

solution95([0, 0, 0, 1], 1);
solution95([1, 0, 0, 1, 0, 0], 4);
solution95([1, 1, 1, 1, 0], 3);

// 조건에 맞게 수열 변환하기 1
const solution96 = (arr: number[]) => {
  let answer: number[] = [];
  arr.forEach((el: number) => {
    if (el >= 50 && el % 2 === 0) {
      answer.push(el / 2);
    } else if (el < 50 && el % 2 !== 0) {
      answer.push(el * 2);
    } else {
      answer.push(el);
    }
  });
  console.log("answer", answer);
  return answer;
};

solution96([1, 2, 3, 100, 99, 98]);

// 5명씩
const solution97 = (names: string[]) => {
  let answer: string[] = [];

  for (let i = 0; i < names.length; i += 5) {
    answer.push(names[i]);
  }

  console.log("answer", answer);
  return answer;
};

solution97(["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"]);

// x 사이의 개수
const solution98 = (myString: any) => {
  let answer: any[] = [];
  myString.split("x").map((el: any) => answer.push(el.length));
  console.log("answer", answer);
  return answer;
};

solution98("oxooxoxxox"); // [1, 2, 1, 0, 1, 0]
solution98("xabcxdefxghi"); // [0, 3, 3, 3]

// 외계행성의 나이
const solution99 = (age: any) => {
  let answer: any = "";
  const planet: any = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    4: "e",
    5: "f",
    6: "g",
    7: "h",
    8: "i",
    9: "j",
  };

  age
    .toString()
    .split("")
    .forEach((el: any) => {
      answer += planet[el];
    });
  console.log("answer", answer);
  return answer;
};

solution99(23);
solution99(51);
solution99(100);

const solution100 = (hp: number) => {
  let answer = 0;

  const ant = {
    장군개미: 5,
    병정개미: 3,
    일개미: 1,
  };

  const gen = Math.floor(hp / ant.장군개미);
  const sor = Math.floor((hp - gen * ant.장군개미) / ant.병정개미);
  const work = hp - gen * ant.장군개미 - sor * ant.병정개미;
  answer = gen + sor + work;
  console.log("answer", answer);
  return answer;
};

solution100(23);
solution100(24);
solution100(999);

const solution101 = (n: number, k: number) => {
  let answer = 0;
  const service = Math.floor(n / 10);
  // console.log("titlTest", ~~(n / 10));
  // console.log("test", ~~-12.6, Math.floor(-12.6));
  if (n >= 10) {
    answer = n * 12000 + (k - service) * 2000;
  } else {
    answer = n * 12000 + k * 2000;
  }
  console.log("service", service);
  console.log("answer", answer);
  return answer;
};

solution101(10, 3);
solution101(64, 6);

const solution102 = (dot: number[]) => {
  let answer = 0;

  if (Math.sign(dot[0]) === 1 && Math.sign(dot[1]) === 1) {
    answer = 1;
  } else if (Math.sign(dot[0]) !== 1 && Math.sign(dot[1]) === 1) {
    answer = 2;
  } else if (Math.sign(dot[0]) !== 1 && Math.sign(dot[1]) !== 1) {
    answer = 3;
  } else {
    answer = 4;
  }

  console.log("answer", answer);
  return answer;
};

solution102([2, 4]);
solution102([-7, 9]);

const solution103 = (numbers: number[], num1: number, num2: number) => {
  let answer: number[] = [];
  numbers.slice(num1, num2 + 1);
  return answer;
};

solution103([1, 2, 3, 4, 5], 1, 3);
solution103([1, 3, 5], 1, 2);

// 짝수 홀수 개수
const solution104 = (num_list: any[]) => {
  let answer: any[] = [];
  let evenCount = 0;
  let oddCount = 0;
  for (let i = 0; i < num_list.length; i++) {
    num_list[i] % 2 === 0 ? evenCount++ : oddCount++;
  }
  answer.push(evenCount, oddCount);
  console.log("answer", answer);
  return answer;
};

solution104([1, 2, 3, 4, 5]);
solution104([1, 3, 5, 7]);

const solution105 = (numbers: any[], direction: string) => {
  let answer: number[] = [];
  if (direction === "right") {
    numbers.unshift(numbers.pop());
    answer.push(...numbers);
  } else {
    numbers.push(numbers.shift());
    answer.push(...numbers);
  }
  console.log("answer", answer);
  return answer;
};

solution105([1, 2, 3], "right");
solution105([4, 455, 6, 4, -1, 45, 6], "left");

// 짝수의 합
const solution106 = (n: number) => {
  let answer = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      answer += i;
    }
  }
  return answer;
};

solution106(10); // 30
solution106(4); // 6

// 아이스 아메리카노
const solution107 = (money: number) => {
  let answer: number[] = [];
  const price = 5500;
  const cnt = Math.floor(money / price);
  const rem = money - price * cnt;
  answer.push(cnt, rem);
  console.log("answer", answer);
  return answer;
};

solution107(5500);
solution107(15000);

const solution108 = (arr: number[], n: number) => {
  let answer: number[] = [];
  console.log(arr.length % 2 === 0);
  if (arr.length % 2 !== 0) {
    arr.map((el: any, idx: number) => {
      answer.push(idx % 2 === 0 && el + n);
    });
  } else {
    arr.map((el: any, idx: number) => {
      answer.push(el);
    });
  }
  console.log("arr", arr);
  console.log("answer", answer);
  return answer;
};

solution108([49, 12, 100, 276, 33], 27);
solution108([444, 555, 666, 777], 100);

const solution109 = (common: number[]) => {
  let answer = 0;
  // common[1] - common[0] === common[2] - common[1]
  common[1] - common[0] === common[2] - common[1]
    ? (answer = common[common.length - 1] + (common[1] - common[0]))
    : (answer = common[common.length - 1] * (common[1] / common[0]));
  return answer;
};

solution109([1, 2, 3, 4]);
solution109([2, 4, 8]);

// 제곱수 판별하기
const solution110 = (n: number) => {
  let answer = 0;
  answer = Math.sqrt(n) % 1 === 0 ? 1 : 2;
  // console.log("isInteger", Number.isInteger(Math.sqrt(n)));
  console.log("answer", answer);
  return answer;
};

solution110(144);
solution110(976);

// 약수 구하기
const solution111 = (n: number) => {
  let answer: number[] = [];
  for (let i = 1; i <= n; i++) {
    n % i === 0 && answer.push(i);
  }
  console.log("answer", answer);
  return answer;
};

solution111(24);
solution111(29);

// 영어가 싫어요
const solution112 = (numbers: any) => {
  let answer = 0;

  const num = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  num.forEach((el: any, idx: number) => {
    console.log("numbers.split(el)", numbers.split(el).join(idx));
    numbers = numbers.split(el).join(idx);
    answer = Number(numbers);
  });
  console.log("answer", answer);
  return answer;
};

solution112("onetwothreefourfivesixseveneightnine");
solution112("onefourzerosixseven");

// 문자열 정렬하기 (2)
const solution113 = (my_string: string) => {
  let answer = "";
  answer = my_string.toLowerCase().split("").sort().join("");
  console.log("answer", answer);
  return answer;
};

solution113("Bcad"); // abcd
solution113("heLLo"); // ehllo
solution113("Python"); // hnopty

// 문자열 계산하기
const solution114 = (my_string: any) => {
  return Function(`return ${my_string}`)();
};

solution114("3 + 4");

// 특정 문자열로 끝나는 가장 긴 부분 문자열 찾기
const solution115 = (myString: any, pat: any) => {
  let answer = "";
  // console.log(myString.split("").splice(0,));
  for (let i = 0; i < myString.length; i++) {
    console.log("i", i);
    // console.log(myString.lastIndexOf(pat)[i].length);
    console.log(myString[i], pat.length);
  }
  console.log(
    "pat",
    myString.indexOf(pat),
    myString.substring(0, myString.lastIndexOf(pat.split("").length))
  );
  return answer;
};

solution115("AbCdEFG", "dE");
solution115("AAAAaaaa", "a");

const solution116 = (myString, pat) => {
  let answer = 0;
  return answer;
};

solution116("ABBAA", "AABB");
solution116("ABAB", "ABAB");
