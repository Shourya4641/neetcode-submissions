class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // create an empty map
        let stringMap = new Map();

        // iterate through the array of strings
        for (const str of strs) {
            
            // create a frequency count array for each string
            let charCount = new Array(26).fill(0);

            // adjust the count in the array
            for (const ch of str) {
                charCount[ch.charCodeAt(0) - 97]++;
            }

            // use the count as a key in the map
            const key = charCount.join("*");

            // check if the key is not present in the map
            if (!stringMap.has(key)) {
                stringMap.set(key, []);
            }

            // add the string to the belonging key (same count array)
            stringMap.get(key).push(str);
        }
        // return the map as an array of array of anagram strings
        return [...stringMap.values()];
    }
}
