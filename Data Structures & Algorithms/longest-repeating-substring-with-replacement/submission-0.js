class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // create a counter map
        let countMap = new Map();

        let left = 0;
        let maxFrequencyCharacter = 0;
        let maxSubString = 0;

        // traverse through the string
        for (let right = 0; right < s.length; right++) {

            // add the character in the window to the count
            countMap[s[right]] = (countMap[s[right]] || 0) + 1;

            // increase the frequency of the character
            maxFrequencyCharacter = Math.max(maxFrequencyCharacter, countMap[s[right]]);

            // check if it is a valid window 
            while (((right - left + 1) - maxFrequencyCharacter) > k) {
                countMap[s[left]]--;
                left++;
            }

            // update the substring size
            maxSubString = Math.max(maxSubString, (right - left + 1));
        }

        return maxSubString;
    }
}
