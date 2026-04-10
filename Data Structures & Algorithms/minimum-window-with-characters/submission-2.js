class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) {
            return ""
        }
        let tCount = {};
        for (let ch of t) {
            tCount[ch] = (tCount[ch] || 0) + 1;

        }
        let windowCount = {};
        let required = Object.keys(tCount).length;
        let formed = 0;

        let left = 0;
        let minLen = Infinity;
        let start = 0;
        for (let right = 0; right < s.length; right++) {
            let ch = s[right];
            windowCount[ch] = (windowCount[ch] || 0) + 1;
            if (tCount[ch] && windowCount[ch] == tCount[ch]) {
                formed++;
            }
            while (formed == required) {
                if (right - left + 1 < minLen) {
                    minLen = right - left + 1;
                    start = left;
                }
                let leftChar = s[left];
                windowCount[leftChar]--;
                if (tCount[leftChar] && windowCount[leftChar] < tCount[leftChar]) {
                    formed--;
                }
                left++;
            }

        }
        return minLen == Infinity ? "" : s.substring(start, start+ minLen);
    }
}
