class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) {
            return false;
        }
        const aCode = 'a'.charCodeAt(0)
        const s1Count = new Array(26).fill(0)
        const s2Count = new Array(26).fill(0);

        for (let i = 0; i < s1.length; i++) {
            s1Count[s1.charCodeAt(i) - aCode]++;
            s2Count[s2.charCodeAt(i) - aCode]++;
        }
        let matches = 0;
        for (let i = 0; i < 26; i++) {
            if (s1Count[i] == s2Count[i]) {
                matches++;
            }


        }
        for (let j = s1.length; j < s2.length; j++) {
            if (matches == 26) {
                return true;
            }
            //add new character
            const indexAdd = s2.charCodeAt(j) - aCode;
            s2Count[indexAdd]++;
            if (s2Count[indexAdd] == s1Count[indexAdd]) {
                matches++
            } else if (s2Count[indexAdd] == s1Count[indexAdd] + 1) {
                matches--;
            }
            // remove old character from the left
            const indexRemove = s2.charCodeAt(j- s1.length) - aCode;
            s2Count[indexRemove]--;
            if (s2Count[indexRemove] == s1Count[indexRemove]) {
                matches++;
            } else if (s2Count[indexRemove] == s1Count[indexRemove] - 1) {
                matches--
            }
        }
        return matches == 26;
    }
}
