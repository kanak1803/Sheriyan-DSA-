let arr = [1, 2, 3, 4, 5];
let length = arr.length;
let temp = new Array(length);
let k = 1;

for (let i = 0; i < length; i++) {
//   temp[i] = arr[(i + k) % length]; //left roatation
  temp[(i + k) % length] = arr[i]; //right roatation
}

console.log(arr);
console.log(temp);
