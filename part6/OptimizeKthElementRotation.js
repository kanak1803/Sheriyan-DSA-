let arr = [1, 2, 3, 4, 5];
let length = arr.length;
let temp = new Array(length);
let k = 2;

for (let i = 0; i < length; i++) {
  temp[i] = arr[(i + k) % length];
}

console.log(arr);
console.log(temp);
