class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();
        for (let i = 0; i < nums.length; i++) {
           let  temp = target - nums[i];
            if (map.has(temp)) {
                return [i, map.get(temp)]
            }
            map.set(nums[i], i);
        }
        return [];
    }
}
