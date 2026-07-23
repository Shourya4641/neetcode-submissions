class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // create the window
        let left = 0;
        // let right = 0;

        // create a set
        let subStringSet = new Set();

        let maxSubStringLength = 0;

        // traverse through the given string
        for (let right = 0; right < s.length; right++) {
            // check if the character is present in the set and remove the duplicates

            while (subStringSet.has(s[right])) {
                subStringSet.delete(s[left]);
                left++;
            }

            subStringSet.add(s[right]);

            maxSubStringLength = Math.max(maxSubStringLength, (right - left + 1));

        }

        return maxSubStringLength;
    }
}
