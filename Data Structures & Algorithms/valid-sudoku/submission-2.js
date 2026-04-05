class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        let val = board[i][j];
        if (val === '.') {
          continue;
        }
        // row check
        for (let col = 0; col < 9; col++) {
          if (col != j && board[i][col] === val) {
            return false;
          }
        }
        // column check
        for (let row = 0; row < 9; row++) {
          if (row != i && board[row][j] == val) {
            return false;
          }
        }
        // box check
        let startRow = Math.floor(i / 3) * 3;
        let startCol = Math.floor(j / 3) * 3;
        for (let r = startRow; r < startRow + 3; r++) {
          for (let c = startCol; c < startCol + 3; c++) {
            if ((r != i || c != j) && board[r][c] == val) {
              return false;
            }
          }
        }
      }
    }
    return true;
  }
}
