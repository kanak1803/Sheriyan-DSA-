let nums = [-1, 0, 1, 2, -1, -4];
let sortArr = nums.sort((a, b) => a - b);
let newArr = [];

for (let i = 0; i < sortArr.length; i++) {
  if (i > 0 && sortArr[i] === sortArr[i - 1]) continue;

  let j = i + 1;
  let k = sortArr.length - 1;

  while (j < k) {
    let sum = sortArr[i] + sortArr[j] + sortArr[k];

    if (sum === 0) {
      newArr.push([sortArr[i], sortArr[j], sortArr[k]]);
      j++;
      k--;

      // Skip duplicate j
      while (j < k && sortArr[j] === sortArr[j - 1]) j++;
      // Skip duplicate k
      while (j < k && sortArr[k] === sortArr[k + 1]) k--;
    } else if (sum < 0) {
      j++;
    } else {
      k--;
    }
  }
}

console.log(newArr);
