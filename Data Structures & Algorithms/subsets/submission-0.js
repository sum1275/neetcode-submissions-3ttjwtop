class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = [];
        this._backtrack(nums, 0, [], result);
        return result;
    }
    _backtrack(nums, index, path, result) {
        result.push([...path]);
        for (let i = index; i < nums.length; i++) {
            path.push(nums[i]);
            this._backtrack(nums, i + 1, path, result);
            path.pop();
        }
    }
}
