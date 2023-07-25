const fibo = (n) => {
  let fib = [0, 1, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = (fib[i - 1] + fib[i - 2]) % 1234567;
  }
  return fib[n];
};

const solution = (n) => {
  return fibo(n) % 1234567;
};