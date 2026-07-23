class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // create 2 pointers
        let left = 0;
        let right = heights.length - 1;

        let maxVolume = (right - left) * Math.min(heights[left], heights[right]);

        // traverse the heights
        while (left < right) {
            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }

            maxVolume = Math.max(maxVolume, (right - left) * Math.min(heights[left], heights[right]));
        }

        return maxVolume;
    }
}
