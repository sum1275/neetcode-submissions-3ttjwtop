class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let n = heights.length;
        const nse = new Array(n);
        const pse = new Array(n);
        let stack1 = [];
        let stack2 = [];

        // 2️⃣ Find Next Smaller Element
        for (let i = n - 1; i >= 0; i--) {
            while (stack2.length && heights[stack2[stack2.length - 1]] >= heights[i]) {
                stack2.pop();
            }
            nse[i] = stack2.length ? stack2[stack2.length - 1] : n;
            stack2.push(i);
        }
        
    // 1️⃣ Find Previous Smaller Element
    for (let i = 0; i < n; i++) {
      while (stack1.length && heights[stack1[stack1.length - 1]] >= heights[i]) {
        stack1.pop();
      }
      pse[i] = stack1.length ? stack1[stack1.length - 1] : -1;
      stack1.push(i);
    }

// 3️⃣ Compute max area
    let maxArea = 0;
    for (let i = 0; i < n; i++) {
      const width = nse[i] - pse[i] - 1;
      const area = heights[i] * width;
      maxArea = Math.max(maxArea, area);
    }

    return maxArea;
    }
}

// Combination of two problem 
// Next smaller element and  Previous smaller element

