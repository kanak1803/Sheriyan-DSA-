let prices = [7, 1, 5, 3, 6, 4];

let minVal = prices[0];
let maxProfit = 0;
let currentProfit = 0;

for (let i = 1; i < prices.length; i++) {
  if (prices[i] < minVal) {
    minVal = prices[i];
  }
  currentProfit = prices[i] - minVal;
  if (maxProfit < currentProfit) {
    maxProfit = currentProfit;
  }
}

console.log(maxProfit);
