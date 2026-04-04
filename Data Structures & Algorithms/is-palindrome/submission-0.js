class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let temp = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        for (let i = 0; i < Math.floor(temp.length / 2); i++) {
            if (temp[i] !== temp[temp.length - i - 1]) {
                return false;
            }
        }
        return true;
    }
}
