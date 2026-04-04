class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = new Map()
        for (let i = 0; i < nums.length; i++) {
            freqMap.set(nums[i], (freqMap.get(nums[i]) || 0) + 1)
        }
        const bucket = new Array(nums.length + 1).fill().map(() => []);
        for (let [key, value] of freqMap) {
            bucket[value].push(key)
        }
        const res = [];
        for (let i = bucket.length - 1; i >= 0, res.length < k; i--) {
            if (bucket[i].length > 0) {
                res.push(...bucket[i]);

            }
        }
        return res.slice(0, k)
    }
}
