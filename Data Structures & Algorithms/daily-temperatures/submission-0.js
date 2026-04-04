class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    helper(i, temperatures) {
        for (let j = i + 1; j < temperatures.length; j++) {
            if (temperatures[j] > temperatures[i]) {
               return j - i;
            }
            
        }
        return 0;
    }
    dailyTemperatures(temperatures) {
        let res = [];
        for (let i = 0; i < temperatures.length; i++) {
          let  temp = this.helper(i, temperatures);
            res.push(temp);

        }
        return res;
    }
}
