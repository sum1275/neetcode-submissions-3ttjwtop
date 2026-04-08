class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = [];
        let maxArea = 0;
        let n = heights.length;
        for (let i = 0; i < n; i++) {
            while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
                let height = heights[stack.pop()];
                let right = i;
                let left = stack.length ? stack[stack.length - 1] : -1;
                let width = right - left - 1;
                maxArea = Math.max(maxArea, height * width);

            }
            stack.push(i);
        }
while(stack.length){
    let height=heights[stack.pop()];
    let right=n;
    let left=stack.length?stack[stack.length-1]:-1;
    let width=right-left-1;
    maxArea=Math.max(maxArea,height*width);

}
return maxArea;

    }
}
/**left boundary = nearest smaller element
right boundary = nearest smaller element */