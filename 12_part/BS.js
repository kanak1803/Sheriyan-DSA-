let arr = [2, 5, 8, 9, 12, 18, 20, 25, 67, 101, 125];
let value = 101;

function binarySearchRecursive(arr, start, end, target) {
  if (start > end) return -1;   
  let mid = Math.floor((start + end) / 2);
  
  if (target === arr[mid]) return mid;
  if (target > arr[mid]) {
   return binarySearchRecursive(arr, mid + 1, end,target);
  } else {
   return binarySearchRecursive(arr, start, mid - 1,target);
  }
}

console.log(binarySearchRecursive(arr, 1, arr.length - 1, value));
