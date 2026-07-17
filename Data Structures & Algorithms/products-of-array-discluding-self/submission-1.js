class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        // create the final product array
        let resultProductArray = new Array(nums.length).fill(1);

        // traverse to fill the left array
        let leftProduct = 1;
        for (let i = 0; i < nums.length; i++) {
            resultProductArray[i] = leftProduct;
            leftProduct *= nums[i];
        }

        // traverse to fill the right array
        let rightProduct = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            resultProductArray[i] *= rightProduct;
            rightProduct *= nums[i];
        }

        return resultProductArray;
    }
}
