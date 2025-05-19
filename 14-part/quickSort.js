function partition(arr, first, last) {
  let pivot = arr[first];
  let i = first + 1;
  let j = last;

  while (i <= j) {
    while (i <= last && arr[i] <= pivot) i++;
    while (j >= first && arr[j] > pivot) j--;

    if (i < j) {
      // Swap arr[i] and arr[j]
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  // Swap pivot with arr[j]
  let temp = arr[j];
  arr[j] = arr[first];
  arr[first] = temp;
  return j; // Return the pivot index
}

function quicksort(arr, first, last) {
  if (first < last) {
    quicksort(arr, first, partition(arr, first, last) - 1);
    quicksort(arr, partition(arr, first, last) + 1, last);
  }
}

let array = [8, 2, 1, 9, 5, 12, 4, 20];

quicksort(array, 0, array.length - 1);
console.log(array);
