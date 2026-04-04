class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */

    dailyTemperatures(temperatures) {
        let stack = [];
        let res = new Array(temperatures.length).fill(0)
        for (let i = 0; i < temperatures.length; i++) {
            while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                let idx = stack.pop();
                res[idx] = i - idx
            }
            stack.push(i);
        }
    return res;
    }
}



/**
 * 
 *    helper(i, temperatures) {
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
 */