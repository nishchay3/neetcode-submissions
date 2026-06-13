class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let s1Count = {};
        for (let char of s1) {
            if (Object.hasOwn(s1Count, char)) {
                s1Count[char] += 1;
            } else {
                s1Count[char] = 1;
            }
        }

        let left = 0;
        let s2Count = {};

        for (let right = 0; right < s2.length; right++) {
            if (Object.hasOwn(s2Count, s2[right])) {
                s2Count[s2[right]] += 1;
            } else {
                s2Count[s2[right]] = 1;
            }
            //Update s2COunt obj and move left
            if (right - left + 1 > s1.length) {
                if (s2Count[s2[left]]) {
                    s2Count[s2[left]] -= 1;
                }
                if (s2Count[s2[left]] === 0) {
                    delete s2Count[s2[left]];
                }
                left += 1;
            }
            //If window equal then, match the counts.
            if (right - left + 1 === s1.length) {
                const areEqual = Object.keys(s1Count).every((key) => {
                    return s1Count[key] === s2Count[key];
                });
                if (areEqual && Object.keys(s1Count).length === Object.keys(s2Count).length) {
                    return true;
                }
            }
        }

        return false;
    }
}
