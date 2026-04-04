class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        if (!board || board.length != 9) {
      return false;
    }
    for (let i = 0; i < 9; i++) {
      if (!Array.isArray(board[i]) || board[i].length != 9) {
        return false;
      }
    }
    for (let boxRow = 0; boxRow < 9; boxRow += 3) {
      for (let boxCol = 0; boxCol < 9; boxCol += 3) {
        const seen = new Set();
        for (let r = boxRow; r < boxRow + 3; r++) {
          for (let c = boxCol; c < boxCol + 3; c++) {
            const v = board[r][c];
            if (v !== "." && (v < "1" || v > "9")) {
              return false;
            }
            if (v == ".") {
              continue;
            }
            if (seen.has(v)) {
              return false;
            }
            seen.add(v);
          }
        }
      }
    }
    //check rows
    for (let i = 0; i < 9; i++) {
      const seen = new Set();
      for (let j = 0; j < 9; j++) {
        let v = board[i][j];
        if (v != "." && (v < "1" || v > "9")) {
          return false;
        }
        if (v == ".") {
          continue;
        }
        if (seen.has(v)) return false;
        seen.add(v);
      }
    }
    for (let j = 0; j < 9; j++) {
      const seen = new Set();
      for (let i = 0; i < 9; i++) {
        const v = board[i][j];
        if (v != "." && (v < "1" || v > "9")) {
          return false;
        }
        if (v == ".") {
          continue;
        }
        if (seen.has(v)) {
          return false;
        }
        seen.add(v);
      }
    }
    return true;
  }
    }

