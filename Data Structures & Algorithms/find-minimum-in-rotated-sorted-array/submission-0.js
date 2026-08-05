class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // initiate the pointers
        let left = 0;
        let right = nums.length - 1;

        while (left < right) {
            // finding the mid
            const mid = Math.floor((left + right) / 2);

            // conditions that the smallest is on the right half
            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                // conditions that the smallest is on the left half
                right = mid;
            }


        }

        return nums[left];
    }
}
