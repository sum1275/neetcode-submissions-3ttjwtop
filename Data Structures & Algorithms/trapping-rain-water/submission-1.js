class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let total=0;
        for(let i=0;i<height.length;i++){
            let leftMax=0;
            let rightMax=0;
            for(let j=i;j>=0;j--){
                leftMax=Math.max(leftMax,height[j])
            }
            for(let j=i;j<height.length;j++){
                rightMax=Math.max(rightMax,height[j]);
            }
            total+=Math.min(leftMax,rightMax)-height[i];
        }
        return total;
    }
}
