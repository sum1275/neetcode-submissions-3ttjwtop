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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */

    mergeTwoList(l1, l2) {
        const dummy = new ListNode(0);
        let curr = dummy;
        while (l1 && l2) {
            if (l1.val < l2.val) {
                curr.next = l1;
                l1 = l1.next;
            } else {
                curr.next = l2;
                l2 = l2.next;
            }
            curr = curr.next;
        }
        if (l1) {
            curr.next = l1;
        }
        if (l2) {
            curr.next = l2;
        }
        return dummy.next;
    }

    mergeKLists(lists) {
        if (lists.length == 0) {
            return null;
        }
        while (lists.length > 1) {
            const merged = [];
            for (let i = 0; i < lists.length; i += 2) {
                const l1 = lists[i];
                const l2 = i + 1 < lists.length ? lists[i + 1] : null
                merged.push(this.mergeTwoList(l1, l2));
            }
            lists = merged;
        }
        return lists[0];
    }
}
/**But jab hum naye nodes dynamically add karte hain (loop ke andar), toh:

head ko move nahi kar sakte (warna list ka start kho jaayega)

head ko maintain karte hue next links banana tedious ho jata hai */