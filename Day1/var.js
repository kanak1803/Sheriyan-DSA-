let arr = [-1, -1, 2, -1, 2, -1, -1, 2, 2];
let i = 0;
let j = 0;

let temp;

while (i <= arr.length - 1) {
  if (arr[i] === -1 ) {
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    j++;
  }
  i++;
}

console.log(arr);
