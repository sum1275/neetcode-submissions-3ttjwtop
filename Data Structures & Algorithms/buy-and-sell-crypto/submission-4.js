class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minSoFar=prices[0],res=0;
        for(let i=1;i<prices.length;i++){
            minSoFar=Math.min(minSoFar,prices[i]);
            res=Math.max(res,prices[i]-minSoFar);
        }
        return res;
    }
}
