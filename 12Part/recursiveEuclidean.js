let a = 20,
  b = 32;

function euccliedean(a, b) {
  if (a == b) return a;
  if (a > b) {
    return euccliedean(a - b, b);
  } else {
    return euccliedean(a, b - a);
  }
}

console.log(euccliedean(a, b));
