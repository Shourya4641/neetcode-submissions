class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // create a set
        const numSet = new Set(nums);

        // traverse through the array
        let maxConsecutiveSequence = 0;

        for (const num of nums) {
            if (!numSet.has(num - 1)) {
                let start = num;
                let length = 1;

                while (numSet.has(start + 1)) {
                    start++;
                    length++;
                }

                maxConsecutiveSequence = Math.max(maxConsecutiveSequence, length);
            }
        }

        return maxConsecutiveSequence;
    }
}
