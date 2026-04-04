class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a, b) => a - b)
        const result = []
        const backtrack = (idx, target, path) => {
            if (target == 0) {
                result.push([...path])
            }
            for (let i = idx; i < candidates.length; i++) {
                if (i > idx && candidates[i] == candidates[i - 1]) {
                    continue;
                }
                if (candidates[i] > target) {
                    break;
                }
                path.push(candidates[i]);
                backtrack(i + 1, target - candidates[i], path);
                path.pop()
            }
        }
        backtrack(0, target, [])
        return result;
    }
}
