let prices = [7, 1, 5, 3, 6, 4];
let minVal = prices[0];
let minValDay = null;

for (let i = 1; i < prices.length; i++) {
  if (prices[i] < minVal) {
    minVal = prices[i];
    minValDay = i;
  }
}
if (minVal == prices[prices.length - 1]) {
  console.log(0);
  return
}
let maxVal = prices[minValDay];
for (let j = minValDay; j < prices.length; j++) {
  if (prices[j] > maxVal) {
    maxVal = prices[j];
  }
}
let profit = maxVal - minVal;
console.log(profit);
