class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;

        let maxSell = prices[prices.length - 1];

        for (let i = prices.length - 2; i >= 0; i--) {
            maxSell = Math.max(prices[i], maxSell);
            profit = Math.max(profit, maxSell - prices[i]);
        }

        return profit;
    }
}
