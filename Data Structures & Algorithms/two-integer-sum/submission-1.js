class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // create a map
        let sumMap = new Map();

        // iterate the array of numbers
        for (let i = 0; i < nums.length; i++) {
            
            let remaining = target - nums[i];
           
            if(sumMap.has(remaining)){
                return [sumMap.get(remaining), i]
            }
            sumMap.set(nums[i], i);
        }
    }
}
