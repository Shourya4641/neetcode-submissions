class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        // create a stack
        let operationStack = [];

        // traverse the array
        for (const token of tokens) {

            let num1 = 0;
            let num2 = 0;

            // check if token is a number or operation
            switch(token) {
                case "+":
                        num1 = Number(operationStack.pop());
                        num2 = Number(operationStack.pop());

                        operationStack.push(num2 + num1);
                    break;
                case "-":
                        num1 = Number(operationStack.pop());
                        num2 = Number(operationStack.pop());

                        operationStack.push(num2 - num1);
                    break;
                case "*":
                        num1 = Number(operationStack.pop());
                        num2 = Number(operationStack.pop());

                        operationStack.push(num2 * num1);
                    break;
                case "/":
                        num1 = Number(operationStack.pop());
                        num2 = Number(operationStack.pop());

                        operationStack.push(Math.trunc(num2 / num1));
                    break;
                default: 
                    operationStack.push(token);
            }
        }

        return Math.round(operationStack.pop());
    }
}
