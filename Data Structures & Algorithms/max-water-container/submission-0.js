class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;
        for (let i = 0; i < heights.length - 1; i++) {
            let temp = 0
            for (let j = i + 1; j < heights.length; j++) {
                temp = (j - i) * Math.min(heights[i], heights[j]);
                max = Math.max(max, temp);
            }

        }
        return max;
    }
}

/**https://www.geeksforgeeks.org/dsa/container-with-most-water/
 * 
 * Diagram important hai samjne ke liye
 */