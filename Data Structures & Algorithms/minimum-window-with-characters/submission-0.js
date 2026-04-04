class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.length < t.length) {
            return "";
        }
        let map = new Map();
        for (let ch of t) {
            map.set(ch, (map.get(ch) || 0) + 1);
        }
        let left = 0;
        let right = 0;
        let formed = 0;
        let required = map.size;
        let windowCounts = new Map();
        let minLen = Infinity;
        let minLeft = 0;

        while (right < s.length) {
            let ch = s[right];
            windowCounts.set(ch, (windowCounts.get(ch) || 0) + 1);
            if (map.has(ch) && windowCounts.get(ch) == map.get(ch)) {
                formed++;
            }
            while (left <= right && formed == required) {
                if (right - left + 1 < minLen) {
                    minLen = right - left + 1;
                    minLeft = left;
                }

                let startChar = s[left];
                windowCounts.set(startChar, windowCounts.get(startChar) - 1);
                if (map.has(startChar) && windowCounts.get(startChar) < map.get(startChar)) {
                    formed--;
                }
                left++;
            }
            right++;
        }
        return minLen == Infinity ? "" : s.substring(minLeft, minLeft + minLen)
    }
}
