function fact(n) {
    if (n == 1) return 1;
    return n  * fact(n - 1);
  }
  
  const ans = fact(5);
  console.log(ans);
  