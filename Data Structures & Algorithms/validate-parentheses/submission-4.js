class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let res = [];
        if (s.length == 0) {
            return true;
        }
        for (let i = 0; i < s.length; i++) {
            let ch = s[i];
            if (ch == '{' || ch == '[' || ch == '(') {
                res.push(ch)
            } else {
                if (res.length === 0) return false;
                let temp = res.pop();
                if ((temp == '(' && s[i] != ')') || (temp == '{' && s[i] != '}') || (temp == '[' && s[i] != ']')) {
                    return false;
                }
            }
        }
        return res.length==0;
    }
}
