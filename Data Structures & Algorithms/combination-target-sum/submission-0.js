class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];
        nums.sort((a, b) => a - b)
        const backtrack = (idx, target, path) => {
            if (target == 0) {
                result.push([...path]);
                return;
            }
            if (idx == nums.length || target < 0) {
                return;
            }
            path.push(nums[idx])
            backtrack(idx, target - nums[idx], path)
            path.pop()
            backtrack(idx + 1, target, path)

        }



        backtrack(0, target, [])
        return result;
    }
}
