class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let res = [];
        for (let j = 0; j <= nums.length - k; j++) {
            let max = -Infinity;
            for (let i = j; i < j+k; i++) {

                if (nums[i] > max) {
                    max = nums[i]
                }

            }
            res.push(max);

        }
        return res;
    }
}
