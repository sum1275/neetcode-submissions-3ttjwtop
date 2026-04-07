class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left=0;
        let right=heights.length-1;
        let maxWater=0;
        while(left<right){
            let h=Math.min(heights[left],heights[right]);
            let width=right-left;
            let area=h*width;
            maxWater=Math.max(maxWater,area);
            if(heights[left] <heights[right]){
                left++;
            }else{
                right--;
            }
        }
        return maxWater;
    }
}
