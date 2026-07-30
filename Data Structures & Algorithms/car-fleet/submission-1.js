class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        // pair the car positions and time
        const cars = [];

        for (let i = 0; i < position.length; i++) {
            cars.push([position[i], speed[i]]);
        }

        // sort the cars based on their postion
        cars.sort((a, b) => (a[0] - b[0]));

        // traverse the cars from the farthest to closest
        let fleets = 0;
        let lastFleetTime = 0;

        for (let i = cars.length - 1; i >= 0; i--) {
            const currentPosition = cars[i][0];
            const currentSpeed = cars[i][1];

            let time = (target - currentPosition) / currentSpeed;

            if (time > lastFleetTime) {
                fleets++;
                lastFleetTime = time;
            }
        }

        return fleets;
    }
}
   