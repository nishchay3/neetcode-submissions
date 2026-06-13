class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        // [9,6]
        // [3,2]
        // [3,3]

        // [4,1,0,7]
        // [6,9,10,3]
        // [2,2,1,1]
        // [3,4.5,10,3]

        const timeObj = {};
        let result = [];

        for (let i = 0; i < position.length; i++) {
            timeObj[position[i]] = (target - position[i]) / speed[i];
        }

        const keys = Object.keys(timeObj).sort((a, b) => a - b);

        for (let i = keys.length - 1; i >= 0; i--) {
            if (i === keys.length - 1) {
                result.push(timeObj[keys[i]]);
            } else if (timeObj[keys[i]] > result[result.length - 1]) {
                result.push(timeObj[keys[i]]);
            }
        }

        return result.length;
    }
}
// [0,1,4,7]---------10
// [10,4.5,6,3,4,5]

// [0,2,4]-----------10
// [5,2.6,6]
