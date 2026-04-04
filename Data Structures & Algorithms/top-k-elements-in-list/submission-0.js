class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    //naive
    topKFrequent(nums, k) {
        let map = new Map();
        let n = nums.length;
        for (let i = 0; i < n; i++) {
            if (map.get(nums[i])) {
                map.set(nums[i], map.get(nums[i]) + 1)
            } else {
                map.set(nums[i], 1)
            }
        }
        let sortedMap = [...map.entries()].sort((a, b) => b[1] - a[1]);
        let res = [];
        sortedMap= sortedMap.slice(0, k);
        for (let num of sortedMap) {
            res.push(num[0])
        }
        return res;
    }
}
