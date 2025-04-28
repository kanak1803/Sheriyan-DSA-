function fibboSum(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  return fibboSum(n - 1) + fibboSum(n - 2);
}

console.log(fibboSum(5));
