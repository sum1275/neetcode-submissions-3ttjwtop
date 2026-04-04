// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (head == null) {
            return null;
        }
        let curr = head;
        while (curr) {
            const copy = new Node(curr.val);
            copy.next = curr.next;
            curr.next = copy;
            curr = copy.next;
        }

        curr = head;
        while (curr) {
            if (curr.random) {
                curr.next.random = curr.random.next;
            }
            curr = curr.next.next;
        }
        curr = head;
        const copyHead = head.next;
        let copyCurr = copyHead;

        while (curr) {
            curr.next = curr.next.next;
            copyCurr.next = copyCurr.next ? copyCurr.next.next : null;
            curr = curr.next;
            copyCurr = copyCurr.next;
        }
        return copyHead;
    }
}

/**
 * copyRandomList(head) {
        if (!head) {
            return null;
        }
        const map = new Map();
        let curr = head;

        while (curr) {
            map.set(curr, new Node(curr.val))
            curr = curr.next;
        }
        curr = head;
        while (curr) {
            const copy = map.get(curr);
            copy.next = curr.next ? map.get(curr.next) : null;
            copy.random = curr.random ? map.get(curr.random) : null
            curr = curr.next;
        }
        return map.get(head);
    }
 */
