class MaxHeap {
    constructor() {
        this.heap = []
    }
    push(val) {
        this.heap.push(val)
        this.bubbleUp()
    }
    pop() {
        if (this.heap.length == 1) {
            return this.heap.pop()
        }
        const max = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbleDown();
        return max;
    }
    bubbleUp() {
        let i = this.heap.length - 1
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2)
            if (this.heap[parent] >= this.heap[i]) {
                break;
            }
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]]
            i = parent;

        }
    }
    bubbleDown() {
        let i = 0, n = this.heap.length;
        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let largest = i;
            if (left < n && this.heap[left] > this.heap[largest]) {
                largest = left
            }
            if (right < n && this.heap[right] > this.heap[largest]) {
                largest = right
            }
            if (largest == i) {
                break;
            }
            [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]]
            i = largest;
        }

    }
    size() {
        return this.heap.length;
    }
}
class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let maxHeap = new MaxHeap()
        for (let s of stones) {
            maxHeap.push(s);
        }
        while (maxHeap.size() > 1) {
            let y = maxHeap.pop()
            let x = maxHeap.pop()
            if (y !== x) {
                maxHeap.push(y - x)
            }

        }
        return maxHeap.size() == 0 ? 0 : maxHeap.pop();
    }
}
