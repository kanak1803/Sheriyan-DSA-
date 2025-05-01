function fibbonacciSum(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  return fibbonacciSum(n - 1) + fibbonacciSum(n - 2);
}

console.log(fibbonacciSum(5));
