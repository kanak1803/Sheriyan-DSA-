let arr = [1, 2, 3, 4, 5];

let length = arr.length;
let copy = arr[length - 1];

for (let i = length -1; i > 0; i--) {
  arr[i] = arr[i - 1];
}
arr[0] = copy

console.log(arr);
