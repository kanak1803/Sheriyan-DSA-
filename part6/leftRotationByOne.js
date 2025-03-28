let arr = [18, 67, 31, 45, 1];
console.log(arr);
let length = arr.length;
let firstEL = arr[0];

for (let i = 1; i < length; i++) {
  arr[i - 1] = arr[i];
}
arr[length - 1] = firstEL;

console.log(arr);
