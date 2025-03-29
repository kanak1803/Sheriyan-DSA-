let arr1 = [2, 5, 6];
let arr2 = [1, 3, 4, 8];

let temp = new Array(arr1.length + arr2.length);
// console.log(temp.length)
let i = 0;
let j = 0;
let k = 0;

while (i < arr1.length && j < arr2.length) {
  if (arr1[i] > arr2[j]) {
    temp[k] = arr2[j];
    j++;
  } else {
    temp[k] = arr1[i];
    i++;
  }
  k++;
}
// Copy any remaining elements from arr2
while (i < arr1.length) {
  temp[k] = arr1[i];
  i++;
  k++;
}

// Copy any remaining elements from arr2
while (j < arr2.length) {
  temp[k] = arr2[j];
  j++;
  k++;
}

console.log(temp);
