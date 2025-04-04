let nums = [2, 2, 3, 3, 3, 3, 2];

let halfOfArr = Math.floor(nums.length / 2);

for (let i = 0; i < nums.length; i++) {
  let count = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[i] == nums[j]) {
      count++;
    }
  }
  if (count > halfOfArr) {
    console.log(nums[i]);
    return;
  }
}
