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

        intervals.sort((a, b) => a.start - b.start);

        const result = [];

        for (let interval of intervals) {
            let start = interval.start, end = interval.end;
            let isOverlap = true;

            for (let j = 0; j < result.length; j++) {
                if (start >= result[j]) {
                    isOverlap = false;
                    result[j] = end;
                    break;
                }
            }

            if (isOverlap) {
                result.push(end);
            }
        }

        return result.length;
    }
}
