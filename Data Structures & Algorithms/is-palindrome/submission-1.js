class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let temp=s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
        let left=0,right=temp.length-1;
        while(left<right){
            if(temp[left]!==temp[right]){
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
