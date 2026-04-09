class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    getIndex(ch) {
        return ch.charCodeAt(0) - 'a'.charCodeAt(0);
    }
    isEqual(a, b) {
        for (let i = 0; i < 26; i++) {
            if (a[i] !== b[i]) {
                return false;
            }
        }
        return true;
    }
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) {
            return false;
        }

        let s1Count = new Array(26).fill(0);
        let windowCount = new Array(26).fill(0);

        for (let ch of s1) {
            s1Count[this.getIndex(ch)]++;
        }
        let left = 0;
        for (let right = 0; right < s2.length; right++) {
            windowCount[this.getIndex(s2[right])]++;
            if (right - left + 1 > s1.length) {
                windowCount[this.getIndex(s2[left])]--;
                left++;
            }
            if (this.isEqual(s1Count, windowCount)) {
                return true;
            }
        }
return false;
    }
}
