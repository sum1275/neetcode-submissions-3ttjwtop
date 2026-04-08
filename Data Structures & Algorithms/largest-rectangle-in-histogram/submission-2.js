class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let n = heights.length;
        let maxArea = 0;
        for (let i = 0; i < n; i++) {
            let height = heights[i];
            //expand left
            let left = i;
            while (left >= 0 && heights[left] >= height) {
                left--;
            }
            //expand right
            let right = i;
            while (right < n && heights[right] >= height) {
                right++;
            }
            let width=right-left-1;
            let area=height*width;
            maxArea=Math.max(maxArea,area);

        }
        return maxArea;
    }
}
/**width = (right - 1) - (left + 1) + 1
 * 
 * Inclusive range Count 
 */
/**👉 Har index i ke liye:

Left side me jao → jab tak height ≥ current height
Right side me jao → jab tak height ≥ current height
 */