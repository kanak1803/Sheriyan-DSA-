let nums = [1,2,3,1];
haveDup = false;

for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] == nums[j]) {
      haveDup = true;
      break;
    }
  }
  if (haveDup) break;
}

console.log(haveDup);

//sorted version

