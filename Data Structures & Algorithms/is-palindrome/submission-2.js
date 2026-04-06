class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphanum(c){
        return /^[a-zA-Z0-9]/i.test(c)
    }
    isPalindrome(s) {
        let left=0;
        let right=s.length-1;
        while(left<right){
            while(left<right && !this.isAlphanum(s[left])){
                left++;
            }
            while(left<right && !this.isAlphanum(s[right])){
                right--;

            }
            if(s[left].toLowerCase()!==s[right].toLowerCase()){
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
