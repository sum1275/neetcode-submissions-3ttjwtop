class MaxHeap {
    constructor() {
        this.heap = []
    }
    size() {
        return this.heap.length;
    }
    push(item) {
        this.heap.push(item)
        this.bubbleUp()
    }
    pop() {
        if (this.heap.length == 1) {
            return this.heap.pop()
        }
        const top = this.heap[0];
        this.heap[0] = this.heap.pop()
        this.bubbleDown()
        return top;
    }
    top() {
        return this.heap[0]
    }
    bubbleUp() {
        let idx = this.heap.length - 1
        while (idx > 0) {
            let parent = Math.floor((idx - 1) / 2)
            if (this.heap[parent] >= this.heap[idx]) {
                break;
            }
            [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
            idx = parent
        }
    }
    bubbleDown() {
        let idx = 0;
        let length = this.heap.length;
        while (true) {
            let left = 2 * idx + 1
            let right = 2 * idx + 2
            let largest = idx;
            if (left < length && this.heap[left] > this.heap[largest]) {
                largest = left
            }
            if (right < length && this.heap[right] > this.heap[largest]) {
                largest = right;
            }
            if (largest == idx) {
                break;
            }
            [this.heap[idx], this.heap[largest]] = [this.heap[largest], this.heap[idx]]
            idx = largest;
        }
    }
}
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        let heap=new MaxHeap()
        for(let n of nums){
heap.push(n);
        }
        for(let i=1;i<k;i++){
heap.pop()
        }
        return heap.top()
     }
}
