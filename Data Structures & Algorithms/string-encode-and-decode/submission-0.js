class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = "";

        // traverse through the array of strings 
        for (let str of strs) {
            // get the length of each string in the array
            let strLength = str.length;

            // append in the encoded string
            encodedString += strLength+"#"+str;
        }

        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decodedStringArray = [];
        let i = 0, j = 0;

        // traverse through the endoded string
        while (i < str.length) {
            // assign the current position value to j
            j = i;

            // move j until str[j] === "#"
            while(str[j] != "#") j++;

            // get the word length other wise
            let wordLength = Number(str.substring(i, j));

            // get the word using the length
            let word = str.substring(j + 1, j + 1 + wordLength);

            // push the word to the decoded string array
            decodedStringArray.push(word);

            // move pointer i to the next word length
            i = j + 1 + wordLength;
        }

        return decodedStringArray;
    }
}
