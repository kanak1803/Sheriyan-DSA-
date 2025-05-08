let a = 20,
  b = 32;

function eucliedean(a, b) {
  if (a == b) return a;
  if (a > b) {
    return eucliedean(a - b, b);
  } else {
    return eucliedean(a, b - a);
  }
}

console.log(eucliedean(a, b));
