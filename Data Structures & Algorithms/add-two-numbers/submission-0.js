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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let carry = 0;
        let curr1 = l1;
        let curr2 = l2;
        let ans = new ListNode(0);
        let curr = ans;
        while (curr1 || curr2) {
            let x = curr1 ? curr1.val : 0;
            let y = curr2 ? curr2.val : 0;
            let sum = x + y + carry;
            carry = Math.floor(sum / 10);
            curr.next = new ListNode(sum % 10);
            curr = curr.next;
            if (curr1) {
                curr1 = curr1.next
            }
            if (curr2) { 
            curr2 = curr2.next;}
        }
        if (carry > 0) {
            curr.next = new ListNode(carry);
        }

        return ans.next;
    }
}
