let a = 20;
let b = 32;

while (a !== b) {
  if (a > b) {
    a = a - b;
  } else {
    b = b - a;
  }
}

console.log(a);
