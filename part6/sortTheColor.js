let nums = [2, 0, 2, 1, 1, 0];
let i = 0;
let j = 0;
let k = nums.length - 1;

while (i < k) {
  if (nums[i] === 0) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
    j++;
    i++;
  } else if (nums[i] === 2) {
    let temp = nums[i]; //temp = 2
    nums[i] = nums[k]; // num[i] = 0
    nums[k] = temp; //num[k] = 2
    k--;
  } else {
    i++;
  }
}

console.log(nums);
