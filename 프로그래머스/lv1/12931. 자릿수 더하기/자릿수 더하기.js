const solution = (n) => {
    let answer = 0;
    answer = [...n.toString()].reduce((acc, cur) => {
      return Number(acc) + Number(cur);
    }, 0);
    return answer;
}