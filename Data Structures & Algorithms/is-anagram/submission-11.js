class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // length check
        if (s.length != t.length) {
            return false;
        }

        // store each character in Map
        let strMap = new Map();

        // traverse through the first string
        for (let i = 0; i < s.length; i++) {
            // check if the character already exists in the Map
            strMap.set(s.charAt(i), (strMap.get(s.charAt(i)) ?? 0) + 1);                
        }

        // traverse through the second string
        for (let i = 0; i < t.length; i++) {
            // check if the character in second string in present in the map
            if (!strMap.has(t.charAt(i)) || strMap.get(t.charAt(i)) == 0) {
                return false;
            }

            strMap.set(t.charAt(i), (strMap.get(t.charAt(i)) - 1));    

        }
        return true;

    }
}
