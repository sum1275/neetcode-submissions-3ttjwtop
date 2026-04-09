class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let maxLen = 0;
        for (let i = 0; i < s.length; i++) {
            let count = {};
            let maxFreq = 0;
            for (let j = i; j < s.length; j++) {
                count[s[j]] = (count[s[j]] || 0) + 1;
                maxFreq = Math.max(maxFreq, count[s[j]]);
                let windowSize = j - i + 1;
                let changes = windowSize - maxFreq;
                if (changes <= k) {
                    maxLen = Math.max(maxLen, windowSize);
                }


            }


        }
        return maxLen;
    }
}
/**Check the codevault Folder */