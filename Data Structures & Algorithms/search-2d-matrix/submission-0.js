class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rowLen = matrix.length, colLen = matrix[0].length;
        let left = 0, right = rowLen * colLen - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            const row = Math.floor(mid / colLen)
            const col = mid % colLen;
            let val=matrix[row][col];
            if(target==val){
                return true
            }else if(target<val){
                right=mid-1
            }else{
                left=mid+1
            }
        }
        return false;
    }
}
