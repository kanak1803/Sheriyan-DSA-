let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
let m = 3;
let n = 3;
let i = m - 1; // 2
let j = n - 1; // 2
let k = m + n - 1; // 6 -1 = 5

while (i >= 0 && j >= 0) {
  if (nums1[i] > nums2[j]) {
    nums1[k] = nums1[i];
    i--;
  } else {
    nums1[k] = nums2[j];
    j--;
  }
  k--;
}
while (j >= 0) {
  nums1[k] = nums2[j];
  j--;
  k--;
}
console.log(nums1);
