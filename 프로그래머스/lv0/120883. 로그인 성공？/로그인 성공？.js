const solution = (id_pw, db) => {
  let answer = "";
  db.forEach((el) => {
    if (id_pw[0] === el[0] && id_pw[1] === el[1]) {
      answer = "login";
    } else if (id_pw[0] === el[0] && id_pw[1] !== el[1]) {
      answer = "wrong pw";
    } else if (id_pw[0] !== el[0] && id_pw[1] !== el[1]) {
      answer = "fail";
    }
  });
  return answer;
};