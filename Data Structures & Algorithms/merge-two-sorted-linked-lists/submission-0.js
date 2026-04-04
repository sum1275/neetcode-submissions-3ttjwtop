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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (list1 == null && list2 == null) {
            return null
        }
        if (list1 == null) {
            return list2
        }
        if (list2 == null) {
            return list1;
        }
        let res = new ListNode;
        let dummy = res;
        while (list1 && list2) {
            if (list1.val < list2.val) {
                dummy.next = list1;
                list1 = list1.next;
            } else {
                dummy.next = list2;
                list2 = list2.next;

            }
            dummy = dummy.next;
        }
        dummy.next = list1 || list2;
        return res.next;
    }
}
