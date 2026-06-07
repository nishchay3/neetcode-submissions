/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        if (intervals.length === 1) return 1;
        if (intervals.length === 0) return 0;

        let startPointer = 0;
        let endPointer = 0;

        let activeMeetings = 0;
        let result = 0;

        const startArr = [];
        const endArr = [];

        for (let interval of intervals) {
            let start = interval.start;
            let end = interval.end;
            startArr.push(start);
            endArr.push(end);
        }
        startArr.sort((a, b) => a - b);
        endArr.sort((a, b) => a - b);

        while(startPointer < intervals.length) {
            if(startArr[startPointer] < endArr[endPointer]) {
                startPointer++;
                activeMeetings++;
            } else {
                endPointer++;
                activeMeetings--;
            }

            result = Math.max(result, activeMeetings);
        }

        return result;
    }
}






















