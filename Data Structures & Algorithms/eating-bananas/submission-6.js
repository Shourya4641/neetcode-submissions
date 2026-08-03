class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        // create 2 pointers
        let left = 0;
        let right = Math.max(...piles);

        let minEatingSpeed = right;

        while (left <= right) {
            let mid = Math.round((left + right) / 2);

            let totalTimeToEat = 0;

            for (const pile of piles) {
                totalTimeToEat += Math.ceil(pile / mid);
            }

            if (totalTimeToEat <= h) {
                minEatingSpeed = Math.min(minEatingSpeed, mid);
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return minEatingSpeed;
    }
}
