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
     * @return {number}
     */
    goodNodes(root) {
        function helper(node, maxPathValue) {
            let totalGood = 0;
            if (!node) { return 0; }
            if (node.val >= maxPathValue) {
                totalGood++;
                maxPathValue = node.val;
            }
            totalGood += helper(node.left, maxPathValue);
            totalGood += helper(node.right, maxPathValue);
            return totalGood;
        }
        return helper(root, root.val);
    }
}
