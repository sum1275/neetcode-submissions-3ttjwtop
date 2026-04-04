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
     * @param {number} k
     * @return {number}
     */
    inorder(root,result=[]){
        if(!root){
            return result;
        }
        this.inorder(root.left,result)
        result.push(root.val)
        this.inorder(root.right,result);
        return result;

    }
    kthSmallest(root, k) {
        let ans=[]
        let result=this.inorder(root,ans);
        return ans[k-1];
    }
}
