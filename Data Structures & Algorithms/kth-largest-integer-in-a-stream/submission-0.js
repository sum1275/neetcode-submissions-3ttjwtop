class MinHeap {
    constructor() {
        this.heap = []
    }
    push(val) {
        this.heap.push(val);
        this._bubbleUp();
    }
    pop() {
        if (this.heap.length == 1) {
            return this.heap.pop();
        }
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._bubbleDown();
        return top;
    }
    top() {
        return this.heap[0]
    }
    size() {
        return this.heap.length;
    }
    _bubbleUp() {
        let idx = this.heap.length - 1;
        while (idx > 0) {
            let parent = Math.floor((idx - 1) / 2)
            if (this.heap[parent] <= this.heap[idx]) {
                break;
            }
            [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]]
            idx = parent;
        }
    }
    _bubbleDown() {
        let idx = 0;
        let length = this.heap.length;
        while (true) {
            let left = 2 * idx + 1;
            let right = 2 * idx + 2;
            let smallest = idx;
            if (left < length && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }
            if (right < length && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }
            if (smallest == idx) {
                break;
            }
            [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]]
            idx = smallest;

        }
    }


}

class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.heap = new MinHeap();
        for (let n of nums) {
            this.add(n);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.heap.push(val);
        if (this.heap.size() > this.k) {
            this.heap.pop();
        }
        return this.heap.top();
    }
}
