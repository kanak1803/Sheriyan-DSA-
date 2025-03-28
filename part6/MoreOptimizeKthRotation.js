let arr = [1, 2, 3, 4, 5];
let k = 2;
//left rotation
// reverse(0, k - 1);
// reverse(k, arr.length - 1);
// reverse(0, arr.length - 1);

//right rotation
reverse(0, arr.length - 1);
reverse(0, k - 1);
reverse(k, arr.length - 1);

function reverse(i, j) {
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
}

console.log(arr);
