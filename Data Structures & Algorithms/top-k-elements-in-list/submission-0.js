class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // create a map
        const frequencyMap = new Map();

        // push the array elements as key and its frequency as value
        for (let num of nums) {
            frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
        }
 
        // convert the map into an array of array value and frequency
        const frequencyArray = [...frequencyMap.entries()];

        // create a bucket array with size n+1 
        const frequencyBucket = new Array(nums.length + 1).fill(0).map(()=>[]);

        // push the array value at the frquency index in the bucket array
        for (const [num, freq] of frequencyArray) {
            frequencyBucket[freq].push(num);
        }

        let frequencyElements = [];

        // traverse the bucket to fetch the answer
        for(let i = frequencyBucket.length - 1; i > 0 && k > 0; i--) {

            // check if bucket is empty
            if (frequencyBucket[i].length > 0) {
                
                // iterate through the bucket
                for(let num of frequencyBucket[i]) {
                    
                    // push the element in the result array
                    frequencyElements.push(num);

                    // check if we have reached the top k frequenct element
                    if (frequencyElements.length === k) {
                        return frequencyElements;
                    }
                }
            }
        }

        return frequencyElements;
    }
}
