class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // create 2 pointers
        let i = 0;
        let j = numbers.length - 1;

        // loop through the array
        while (i < j) {
            
            // move the pointers until we find the right pair
            while ((numbers[i] + numbers[j]) > target) {
                j--;
            }

            while ((numbers[i] + numbers[j]) < target) {
                i++;
            }

            if ((numbers[i] + numbers[j]) === target) {
                return [i + 1, j + 1];
            }
        }
    }
}
