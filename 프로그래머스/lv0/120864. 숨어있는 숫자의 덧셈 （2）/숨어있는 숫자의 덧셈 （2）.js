const solution = (my_string) => {
    let answer = 0;
    my_string.split(/[a-zA-Z]/g).map((el) => {
      !Number.isNaN(Number(el)) ? (answer += Number(el)) : 0;
    });
    return answer;
};