class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxWater=0;
        for(let i=0;i<heights.length;i++){
            for(let j=i+1;j<heights.length;j++){
                let h=Math.min(heights[i],heights[j]);
                let width=j-i;
                let area=h*width;
                maxWater=Math.max(maxWater,area);
            }
        }
        return maxWater;
    }
}
