class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        
        let temp = []
        for (let i = 0; i < tokens.length; i++) {
            let t=tokens[i]
            if (/^-?\d+$/.test(t)) {
                temp.push(Number(t))
            } else {
                let b = temp.pop();
                let a = temp.pop();
                let result=0;
                switch (t) {
                    case '+': result = a + b;
                        break;

                    case '-': result = a - b;
                        break;
                    case '*': result = a*b;
                        break;
                    case '/': result =Math.trunc(a/b);
                        break;
                }
                temp.push(result);

            }
            
        }
        return temp.pop();
    }
}
