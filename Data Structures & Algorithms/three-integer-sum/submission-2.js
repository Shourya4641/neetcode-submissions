class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // sort the array
        nums.sort((a, b) => a - b);

        let resultSum = [];
        // create 3 pointers
        // loop through the array
        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let target = -(nums[i]);
            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[left] + nums[right];

                if (sum < target) {
                    left++;
                } else if (sum > target) {
                    right--;
                } else {
                    resultSum.push([nums[i], nums[left], nums[right]]);
                    left++;
                    right--;

                    while (left < right && nums[left] === nums[left - 1]) left++;
                    while (left < right && nums[right] === nums[right + 1]) right--;
                }
            }
        }

        return resultSum;
    }
}
