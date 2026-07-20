class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // create 2 pointers
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            while (left < right && !isAlphaNumeric(s[left])) {
            left++;
        }

        while (left < right && !isAlphaNumeric(s[right])) {
            right--;
        }

        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

            left++;
            right--;
        }
        
        return true;
    }
}

function isAlphaNumeric(c) {
    const code = c.toLowerCase().charCodeAt(0);
    return (code >= 97 && code <= 122) || (code >= 48 && code <= 57);
}
