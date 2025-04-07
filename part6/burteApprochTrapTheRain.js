let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let rain = 0;

for (let i = 1; i < height.length - 1; i++) {
  let leftMax = 0;
  let rightMax = 0;
  for (let j = i - 1; j >= 0; j--) {
    if (height[j] > leftMax) {
      leftMax = height[j];
    }
  }

  for (let j = i + 1; j < height.length; j++) {
    RightMax = height[j];
    if (height[j] > rightMax) {
      rightMax = height[j];
    }
  }
  let waterAtI = Math.min(leftMax, rightMax) - height[i];
  if (waterAtI > 0) {
    rain += waterAtI;
  }
}

console.log(rain);
