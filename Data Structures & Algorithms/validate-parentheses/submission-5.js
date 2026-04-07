class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack=[];
        let map={
            ')':'(',
            '}':'{',
            ']':'['
        }
        for(let char of s){
            if(char in map ){
                let top=stack.length==0?'#':stack.pop();
                if(top!=map[char]){
                    return false;
                }
            }else{
                stack.push(char)
            }
        }
        return stack.length==0;
    }
}
