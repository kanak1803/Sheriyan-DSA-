function fibb(n, first, second) {
  if (n == 0) return;
  let third = first + second;
  process.stdout.write(third + " ");
  fibb(n - 1, second, third);
}

let n = 10;
process.stdout.write(0 + " " + 1 + " ");
fibb(n - 2, 0, 1);
