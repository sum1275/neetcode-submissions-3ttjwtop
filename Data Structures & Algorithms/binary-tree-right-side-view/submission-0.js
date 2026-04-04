/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        if (!root) {
            return [];
        }
        let res = [];
        let queue = [root];
        while (queue.length) {
            let size = queue.length;
            let rightmost = null;
            for (let i = 0; i < size; i++) {
                let node = queue.shift();
                rightmost = node.val;
                if (node.left) {
                    queue.push(node.left)
                }
                if (node.right) {
                    queue.push(node.right)
                }

            }
            res.push(rightmost);
        }
        return res
    }
}
