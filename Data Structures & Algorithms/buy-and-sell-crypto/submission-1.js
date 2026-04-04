class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let minPrice = Infinity;
        for (let i = 0; i < prices.length; i++) {
            if (prices[i] < minPrice) {
                minPrice = Math.min(prices[i], minPrice);
            } else if (prices[i] - minPrice > maxProfit) {
                maxProfit = Math.max(prices[i] - minPrice, maxProfit);
            }
        }
        return maxProfit;
    }
}


/**    maxProfit(prices) {
        let maxProfit = 0;
        for (let i = 0; i < prices.length - 1; i++) {
            for (let j = i + 1; j < prices.length; j++) {
                maxProfit = Math.max(maxProfit, prices[j] - prices[i]);
            }
        }
        return maxProfit;
    }
} */
