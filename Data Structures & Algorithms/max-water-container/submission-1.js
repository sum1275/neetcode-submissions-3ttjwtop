class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;
        let left = 0, right = heights.length - 1;
        while (left < right) {
            let waterStored = (right - left) * (Math.min(heights[left], heights[right]))
            max = Math.max(waterStored, max);
            if (heights[left] < heights[right]) {
                left++;
            } else if (heights[left] > heights[right]) {
                right--;
            } else {
                left++;
                right--;
            }
        }
        return max;
    }
}

/**
 * maxArea(heights) {
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
 */

/**https://www.geeksforgeeks.org/dsa/container-with-most-water/
 * 
 * Diagram important hai samjne ke liye
 */