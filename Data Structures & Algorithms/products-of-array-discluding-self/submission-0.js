class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // create a left product array
        let leftProductArray = new Array(nums.length).fill(1);

        // create right product array
        let rightProductArray = new Array(nums.length).fill(1);

        // create the final product array
        let resultProductArray = new Array(nums.length).fill(1);

        // traverse to fill the left array
        let leftProduct = 1;
        for (let i = 0; i < nums.length; i++) {
            leftProductArray[i] = leftProduct;
            leftProduct *= nums[i];
        }

        // traverse to fill the right array
        let rightProduct = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            rightProductArray[i] = rightProduct;
            rightProduct *= nums[i];
        }

        // merge to find the resultant product array
        for (let i = 0; i < nums.length; i++) {
            resultProductArray[i] = leftProductArray[i] * rightProductArray[i];
        }

        return resultProductArray;
    }
}
