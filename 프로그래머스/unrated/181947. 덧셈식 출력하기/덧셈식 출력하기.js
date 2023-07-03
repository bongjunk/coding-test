const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const input1 = Number(input[0]);
    const input2 = Number(input[1]);
    console.log(`${input1} + ${input2} = ${input1 + input2}`);
});