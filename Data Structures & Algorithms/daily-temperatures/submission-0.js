class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = new Array(temperatures.length).fill(0);
        const stack = []; // stores indices

        for (let i = 0; i < temperatures.length; i++) {

            while (
                stack.length &&
                temperatures[i] > temperatures[stack[stack.length - 1]]
            ) {
                const previousIndex = stack.pop();
                result[previousIndex] = i - previousIndex;
            }

            stack.push(i);
        }

            return result;
    }
}

