class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxLen=0;
        for(let i=0;i<s.length;i++){
            let set=new Set();
            for(let j=i;j<s.length;j++){
                if(set.has(s[j])){
                    break;
                }
                set.add(s[j]);
                maxLen=Math.max(maxLen,j-i+1);
            }
        }
        return maxLen;
    }
}
