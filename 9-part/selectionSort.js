let arr = [10, 5, 12, 1, 3];
let n = arr.length;
console.log(arr);

for (let i = 0; i < n - 1; i++) {
  let minVal = i;
  for (let j = i + 1; j < n; j++) {
    if (arr[minVal] > arr[j]) {
      minVal = j;
    }
  }
  if (minVal != i) {
    let temp = arr[minVal];
    arr[minVal] = arr[i];
    arr[i] = temp;
  }
}
console.log(arr);
