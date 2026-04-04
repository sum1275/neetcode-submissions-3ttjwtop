class TrieNode {
    constructor() {
        this.children = {};
        this.isWord = false;
        this.word = null;
    }
}
class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const root = new TrieNode();
        for (let w of words) {
            let node = root;
            for (let ch of w) {
                if (!node.children[ch]) {
                    node.children[ch] = new TrieNode()
                }
                node = node.children[ch];
            }
            node.isWord = true;
            node.word = w;
        }
        const ROWS = board.length
        const COLS = board[0].length;
        const result = new Set();

        const dfs = (r, c, node) => {
            if (r < 0 || c < 0 || r >= ROWS || c >= COLS) {
                return;
            }
            const ch = board[r][c];
            if (ch == '#' || !node.children[ch]) { return; }
            node = node.children[ch];
            if (node.isWord) {
                result.add(node.word)
                node.isWord = false;
            }
            board[r][c] = '#'
            dfs(r + 1, c, node)
            dfs(r - 1, c, node)
            dfs(r, c + 1, node)
            dfs(r, c - 1, node);
            board[r][c] = ch;


            if (Object.keys(node.children).length == 0) {
                delete node.children[ch];

            }
        }
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                dfs(r, c, root)
            }
        }
        return Array.from(result);
    }
}
