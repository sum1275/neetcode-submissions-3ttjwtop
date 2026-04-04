class TrieNode {
    constructor() {
        this.children = {};
        this.isWord = false;
    }
}
class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let node = this.root;
        for (let ch of word) {
            if (!node.children[ch]) {
                node.children[ch] = new TrieNode()
            }
            node = node.children[ch];//for linking
        }
        node.isWord = true;
    }


    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this._dfsSearch(this.root, word, 0)
    }
    _dfsSearch(node, word, idx) {
        if (idx == word.length) {
            return node.isWord;
        }
        const ch = word[idx];
        if (ch !== '.') {
            if (!node.children[ch]) {
                return false;
            }
            return this._dfsSearch(node.children[ch], word, idx + 1)
        }
        for (let childNode of Object.values(node.children)) {
            if (this._dfsSearch(childNode, word, idx + 1)) {
                return true;
            }
        }
        return false;

    }
}
