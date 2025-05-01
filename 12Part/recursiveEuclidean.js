let a = 20,
  b = 32;

function euclidean(a, b) {
  if (a == b) return a;
  if (a > b) {
    return euclidean(a - b, b);
  } else {
    return euclidean(a, b - a);
  }
}

console.log(euclidean(a, b));
