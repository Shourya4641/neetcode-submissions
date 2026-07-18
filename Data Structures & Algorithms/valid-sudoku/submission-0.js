class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // create the hashmaps
        let rowHashArray = Array.from({ length: 9 }, () => new Set());
        let columnHashArray = Array.from({ length: 9 }, () => new Set());
        let boxHashArray = Array.from({ length: 9 }, () => new Set());

        // traverse through the board
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                // skip the empty elements
                if (board[i][j] === ".") continue;

                let elementValue = board[i][j];

                // get the box in which the element is present
                let boxNumber = (Math.floor(i / 3) * 3) + Math.floor(j / 3);

                // check if the value exists in the map
                if (rowHashArray[i].has(elementValue) ||
                    columnHashArray[j].has(elementValue) || 
                    boxHashArray[boxNumber].has(elementValue)) 
                    return false;

                // add the element in the map array
                rowHashArray[i].add(elementValue);
                columnHashArray[j].add(elementValue);
                boxHashArray[boxNumber].add(elementValue);
            }
        }
        return true;
    }
}
