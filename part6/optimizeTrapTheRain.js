let height = [4, 2, 0, 3, 2, 5];
let rain = 0;
let leftMaxArr = new Array(height.length).fill(0);
let rightMaxArr = new Array(height.length).fill(0);
let leftMaxEl = height[0];
let rightMaxEl = height[height.length - 1];

for (let i = 0; i < height.length; i++) {
  if (height[i] >= leftMaxEl) {
    leftMaxEl = height[i];
  }
  leftMaxArr[i] = leftMaxEl;
}

for (let i = height.length - 1; i >= 0; i--) {
  if (height[i] >= rightMaxEl) {
    rightMaxEl = height[i];
  }
  rightMaxArr[i] = rightMaxEl;
}

for (let i = 0; i < height.length; i++) {
   rain +=  Math.min(leftMaxArr[i],rightMaxArr[i]) - height[i]
    
}

console.log(rain)
