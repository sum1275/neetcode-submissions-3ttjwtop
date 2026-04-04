class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let mapAnagrams = new Map();
        let res = [];
        for (let str of strs) {
           
            let key = str.split('').sort().join('');

            if (mapAnagrams.has(key)) {
                mapAnagrams.get(key).push(str)
            } else {
                mapAnagrams.set(key, [str]);
            }
        }
        for (let [key, value] of mapAnagrams.entries()) {
            res.push(value);
        }
        return res;
    }
}
