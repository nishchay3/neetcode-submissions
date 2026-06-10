class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";

        for (let item of strs) {
            result += item.length + "#" + item;
        }

        return result;
    }

    // "4#Prak4#shee"

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;

        while(i < str.length) {
            let j = i;

            while(str[j] !== "#") {
                j++;
            }

            const length = Number(str.slice(i, j));
            const word = str.slice(j + 1, j + 1 + length);
            result.push(word);

            i = j + 1 + length;
        }

        return result;
    }
}


















