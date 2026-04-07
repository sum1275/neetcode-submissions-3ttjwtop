class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for (let token of tokens) {
            if (!isNaN(token)) {
                stack.push(Number(token));
            } else {
                let b = stack.pop();
                let a = stack.pop();
                let result;
                switch (token) {
                    case '+':
                        result = a + b;
                        break;
                    case '-':
                        result = a - b;
                        break;
                    case '*':
                        result = a * b;
                        break;
                    case '/':
                        result = Math.trunc(a / b);
                        break;


                }

                stack.push(result)
            }
        }
        return stack[0];
    }
}
