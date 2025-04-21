let arr = [10, 5, 12, 1, 13];

let n = arr.length;

function swap(a, b) {
  let temp = a;
  a = b;
  b = temp;
  return a, b;
}

for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < n - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(arr);
