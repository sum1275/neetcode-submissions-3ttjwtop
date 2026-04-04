class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) {
            return false;
        }
        let arr = new Array(26).fill(0);
        for (let i = 0; i < s.length; i++) {
            let ch = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
            arr[ch]++


        }
        for (let i = 0; i < s.length; i++) {
            let ch = t[i].charCodeAt(0) - 'a'.charCodeAt(0);
            arr[ch]--;


        }
        return arr.every(item => item == 0)

    }
}
