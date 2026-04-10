class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    isValid(windowCount, tCount) {
        for (let key in tCount) {
            if ((windowCount[key] || 0) < tCount[key]) {
                return false;
            }

        }
        return true;
    }
    minWindow(s, t) {
        if (t.length > s.length) {
            return "";
        }
        let tCount = {};
        for (let ch of t) {
            tCount[ch] = (tCount[ch] || 0) + 1;
        }
        let minLen = Infinity;
        let result = '';
        for (let i = 0; i < s.length; i++) {
            let windowCount = {};
            for (let j = i; j < s.length; j++) {
                let ch = s[j];
                windowCount[ch] = (windowCount[ch] || 0) + 1;
                if (this.isValid(windowCount, tCount)) {
                    let windowSize = j - i + 1;
                    if (windowSize < minLen) {
                        minLen = windowSize;
                        result = s.substring(i, j + 1);
                    }
                }
            }
        }
return result;
    }
}
