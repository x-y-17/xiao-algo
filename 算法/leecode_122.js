// 122. 买卖股票的最佳时机 II

// 新建一个变量，用来统计总利润
// 遍历价格数组，如果当前价格比昨天高，就在昨天买，今天卖，否则就不交易
// 遍历结束后，返回所有利润之和

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    for(let i = 0;i < prices.length;i++) {
        if (prices[i] > prices[i-1]) {
            profit += prices[i] - prices[i-1];
        }
    }
    return profit;
};