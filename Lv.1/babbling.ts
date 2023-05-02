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

const solution43 = (numLog: any) => {
  const controller = {
    "1": "w",
    "-1": "s",
    "10": "d",
    "-10": "a",
  };
  console.log(
    "answer",
    numLog
      .slice(1)
      .reduce(
        (acc: any, cur: any, idx: any) =>
          acc + controller[`${numLog[idx + 1] - numLog[idx]}`],
        ""
      )
  );
  return numLog
    .slice(1)
    .reduce(
      (acc: any, cur: any, idx: any) =>
        acc + controller[`${numLog[idx + 1] - numLog[idx]}`],
      ""
    );
};

solution43([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]);
