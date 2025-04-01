let prices = [7, 1, 5, 3, 6, 4];
let totalProfit = 0;
let buyVal;
let sellVal;

for (let i = 1; i < prices.length; i++) {
  if (prices[i] > prices[i - 1]) {
    buyVal = prices[i - 1];
    sellVal = prices[i];
    totalProfit += sellVal - buyVal;
  }
}   
console.log(totalProfit)
