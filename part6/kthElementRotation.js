let k = 4;
let arr = [1, 2, 3, 4, 5];
let length = arr.length;

if ((k === length)) {
  console.log(arr);
  return;
}

for (let j = 0; j < k; j++) {
  let copy = arr[0];

  for (let i = 1; i < length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[length - 1] = copy;
}

console.log(arr);
