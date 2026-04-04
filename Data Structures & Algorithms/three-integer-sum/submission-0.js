class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const res = [];
        for (let i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i - 1] == nums[i]) {
                continue;
            }
            let left = i + 1;
            let right = nums.length - 1;
            let target = -nums[i];
            while (left < right) {
                if (nums[left] + nums[right] == target) {
                    res.push([nums[i], nums[left], nums[right]]);
                    right--;
                    left++;
                    while (left < right && nums[left] == nums[left - 1]) {
                        left++;
                    }
                    while (left < right && nums[right] == nums[right + 1]) {
                        right--;
                    }
                } else if (nums[left] + nums[right] > target) {
                    right--;
                } else {
                    left++;
                }
            }

        }
        return res;

    }
}
