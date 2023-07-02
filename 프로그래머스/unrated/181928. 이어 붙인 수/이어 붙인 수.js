const solution = (num_list) => {
  let answer = 0;
  let even = "";
  let odd = "";

  num_list.map((el) => {
    if (el % 2 === 1) {
      odd += el;
    } else {
      even += el;
    }
  });

  answer = Number(even) + Number(odd);
  return answer;
}