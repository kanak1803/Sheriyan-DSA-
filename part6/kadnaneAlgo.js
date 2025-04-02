let nums = [-2,1];
let sum = 0;
let maxSubarrVal = -Infinity;

for (let i = 0; i < nums.length; i++) {
  sum += nums[i];

  if (sum > maxSubarrVal) {
    maxSubarrVal = sum;
  }
  if (sum < 0) {
    sum = 0;
  }
}

console.log(maxSubarrVal)
