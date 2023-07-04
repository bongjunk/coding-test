const solution = (s) => {
    let answer = [0, 0];
    while (s !== "1") {
    let arr = [...s].filter((v) => v === "1").length;
    answer[0]++;
    answer[1] += s.length - arr;
    s = arr.toString(2);
  }
    return answer;
}