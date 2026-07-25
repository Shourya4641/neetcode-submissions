class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // create a stack to store openning brackets
        let bracketsStack = [];

        const validBracketPairs = {
            ")":"(",
            "}":"{",
            "]":"["
        };

        // traverse the string of brackets
        for (let bracket of s) {
            if (bracket === "{" || bracket === "[" || bracket === "(") {
                bracketsStack.push(bracket);
            } else {
                if (bracketsStack.pop() !== validBracketPairs[bracket]) return false;
            }
        } 

        return bracketsStack.length === 0;
    }
}
