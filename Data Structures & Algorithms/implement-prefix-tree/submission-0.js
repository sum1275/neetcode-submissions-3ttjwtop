class TrieNode {
    constructor() {
        this.children = {};
        this.isWord = false;

    }
}
class PrefixTree {
    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        this._insertWord(this.root, word);
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this._searchWord(this.root, word);
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        return this._searchPrefix(this.root, prefix);
    }

    _insertWord(node, word) {
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode()
            }
            node = node.children[char];
        }
        node.isWord = true;
    }
    _searchWord(node, word) {
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isWord;
    }
    _searchPrefix(node, prefix) {
        for (let char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];

        }
        return true;
    }
}
