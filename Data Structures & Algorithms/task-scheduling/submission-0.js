class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const freq = new Array(26).fill(0);
        for (let t of tasks) {
            freq[t.charCodeAt(0) - 'A'.charCodeAt(0)]++;
        }
        const maxFreq = Math.max(...freq);
        // Count how many tasks have this max frequency

        let maxCount = 0;
        for (let f of freq) {
            if (f === maxFreq) {
                maxCount++;
            }
        }
        const total = (maxFreq - 1) * (n + 1) + maxCount;
        return Math.max(total, tasks.length);


    }
}
