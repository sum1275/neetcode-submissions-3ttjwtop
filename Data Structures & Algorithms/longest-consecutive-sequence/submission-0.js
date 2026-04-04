class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let maxLen = 0;
        for (let num of set) {
            if (!set.has(num - 1)) {
                let curr = num;
                let len = 1;
                while (set.has(curr + 1)) {
                    len++;
                    curr++;
                }
                maxLen=Math.max(maxLen,len);
            }
        }
        return maxLen;
    }
}
