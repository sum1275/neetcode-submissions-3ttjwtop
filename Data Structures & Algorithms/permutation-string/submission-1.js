class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    getCount(str) {
        let count = {};
        for (let ch of str) {
            count[ch] = (count[ch] || 0) + 1;

        }
        return count;
    }
    isEqual(a, b) {
        let keyA = Object.keys(a);
        let keyB = Object.keys(b);
        if (keyA.length !== keyB.length) {
            return false;
        }
        for (let key of keyA) {
            if (a[key] !== b[key]) {
                return false;
            }
        }
        return true;
    }
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) {
            return false;
        }
        let s1Count = this.getCount(s1);
        let windowSize = s1.length;

        for (let i = 0; i <= s2.length - windowSize; i++) {
            let sub = s2.substring(i, i + windowSize);
            let subCount = this.getCount(sub);
            if (this.isEqual(s1Count, subCount)) {
                return true;
            }

        }
        return false;
    }
}
