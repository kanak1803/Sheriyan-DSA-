let nums = [-2, 1];
let maxSubarrVal = nums[0];
let currentMaxVal = nums[0];

for (let i = 1; i < nums.length; i++) {
  currentMaxVal += nums[i];

  if (currentMaxVal > maxSubarrVal) {
    maxSubarrVal = currentMaxVal;
  }
  if (currentMaxVal < 0) {
    currentMaxVal = 0;
  }
}

console.log(maxSubarrVal); // 1
