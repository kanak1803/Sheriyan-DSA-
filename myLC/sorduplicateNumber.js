let nums = [1,2,3,1];
haveDup = false;
nums.sort();

for (let i = 0; i < nums.length - 1; i++) {
  if (nums[i] == nums[i + 1]) {
    haveDup = true;
  }
  if (haveDup) break;
}

console.log(haveDup);
