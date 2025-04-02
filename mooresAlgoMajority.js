let nums = [6,5,5];
let maxEl = nums[0];
let count = 1;

for (let i = 0; i < nums.length; i++) {
  if (count == 0) {
    maxEl = nums[i];
    count = 1
  }
  if (nums[i] == nums[i + 1]) {
    count++;
  } else {
    count--;
  }
}

console.log(maxEl)
