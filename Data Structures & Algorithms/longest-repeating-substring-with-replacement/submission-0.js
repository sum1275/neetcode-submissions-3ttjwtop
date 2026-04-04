class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0, maxLength = 0, maxCount = 0;
        let map = new Map();
        for (let right = 0; right < s.length; right++) {
            const char = s[right]
            map.set(char, (map.get(char) || 0) + 1);
            maxCount = Math.max(maxCount, map.get(char));
            while (right - left + 1 - maxCount > k) {
                let leftchar = s[left];
                map.set(leftchar, map.get(leftchar) - 1);
                left++;
            }
            maxLength = Math.max(maxLength, right - left + 1)
        }
        return maxLength;



    }
}
