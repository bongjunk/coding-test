const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    const answer = str.split("").map((el) => {
      return el === el.toLowerCase() ? el.toUpperCase() : el.toLowerCase();
    })
    .join("");
    console.log(answer)
});