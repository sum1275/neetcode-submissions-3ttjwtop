/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        if (!head || k == 1) {
            return head;
        }
        let dummy = new ListNode(0,head);
        let groupPrev = dummy;
        while (true) {
            let kth = this.getKthNode(groupPrev, k);
            if (!kth) break;
            let groupNext = kth.next;

            let prev = groupNext;
            let curr = groupPrev.next;
            while (curr !== groupNext) {
                let temp = curr.next;
                curr.next = prev;
                prev = curr;
                curr = temp;
            }
            let temp = groupPrev.next;
            groupPrev.next = kth;
            groupPrev = temp;
        }
        return dummy.next;

    }
    getKthNode(node, k) {
        while (node && k > 0) {
            node = node.next;
            k--;
        }
        return node;
    }
}
