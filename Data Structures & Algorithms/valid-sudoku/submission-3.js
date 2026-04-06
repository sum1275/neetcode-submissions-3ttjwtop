class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    let rows = Array.from({ length: 9 }, () => new Set());
    let cols = Array.from({ length: 9 }, () => new Set());
    let boxes = Array.from({ length: 9 }, () => new Set());
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        let val = board[i][j];
        if (val == '.') {
          continue;
        }
        let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3) ;
        if (rows[i].has(val) || cols[j].has(val) || boxes[boxIndex].has(val)) {
          return false;
        }
        rows[i].add(val);
        cols[j].add(val);
        boxes[boxIndex].add(val)

      }
    }
    return true;
  }
}
