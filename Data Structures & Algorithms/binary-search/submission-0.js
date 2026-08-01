class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // create the pointer
        let left = 0;
        let right = nums.length - 1;
        let mid = 0;

        while (left <= right) {
            mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) {
                return mid;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1; 
    }
}
