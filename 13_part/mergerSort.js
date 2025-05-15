function conquor(arr, first, mid, last) {
  let temp = new Array(last - first + 1);
  let i = first;
  let j = mid + 1;
  let k = 0;
  while (i <= mid && j <= last) {
    if (arr[i] > arr[j]) {
      temp[k] = arr[i];
      i++;
    } else {
      temp[k] = arr[j];
      j++;
    }
    k++;
  }

  while (i <= mid) {
    temp[k] = arr[i];
    i++;
    k++;
  }
  while (j <= last) {
    temp[k] = arr[j];
    j++;
    k++;
  }
  let p = 0;
  let t = first;
  while (p < temp.length) {
    arr[t] = temp[p];
    t++;
    p++;
  }
}

function divide(arr, first, last) {
  if (first >= last) return;
  let mid = Math.floor((first + last) / 2);
  divide(arr, first, mid);
  divide(arr, mid + 1, last);
  conquor(arr, first, mid, last);
}
let array = [8, 2, 1, 9, 5, 12, 4, 20];

divide(array, 0, array.length - 1);
console.log(array);
