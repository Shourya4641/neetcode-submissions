class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        // edge case
        if (s1.length > s2.length) {
            return false;
        }

        // create a count array
        let s1Counts = new Array(26).fill(0);
        let s2Counts = new Array(26).fill(0);

        // traverse through both strings and then fill the character counts
        for (let i = 0; i < s1.length; i++) {
            s1Counts[s1.charCodeAt(i) - 97]++;
            s2Counts[s2.charCodeAt(i) - 97]++;
        }

        // initialise the character count matches
        let charMatches = 0;
        for (let i = 0; i < 26; i++) {
            if (s1Counts[i] === s2Counts[i]) charMatches++;
        }

        // initialise the window and traverse s2
        let left = 0;
        for (let right = s1.length; right < s2.length; right++) {
            if (charMatches === 26) return true;

            // updates the matches count
            let charIndex = s2.charCodeAt(right) - 97;
            s2Counts[charIndex]++;
            
            if (s1Counts[charIndex] === s2Counts[charIndex]) {
                charMatches++;
            } else if (s1Counts[charIndex] + 1 === s2Counts[charIndex]) {
                charMatches--;
            }

            // slide the left pointer
            charIndex = s2.charCodeAt(left) - 97;
            s2Counts[charIndex]--;

            if (s1Counts[charIndex] === s2Counts[charIndex]) {
                charMatches++;
            } else if (s1Counts[charIndex] - 1 === s2Counts[charIndex]) {
                charMatches--;
            }

            left++;
        }

        return charMatches === 26;
    }
}
