class Heap {
    constructor(compareFn) {
        this.heap = [];
        this.compare = compareFn;
    }
    size() {
        return this.heap.length;
    }
    peek() {
        return this.heap.length == 0 ? null : this.heap[0];
    }
    push(value) {
        this.heap.push(value);
        this._bubbleUp()
    }
    pop() {
        if (this.heap.length == 0) {
            return null
        }
        if (this.heap.length == 1) {
            return this.heap.pop()
        }
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._bubbleDown();
        return max;
    }
    _bubbleUp() {
        let i = this.heap.length - 1;
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (this.compare(this.heap[i], this.heap[parent])) {
                [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
                i = parent
            } else {
                break;
            }
        }
    }
    _bubbleDown() {
        let i = 0, n = this.heap.length;
        while (true) {
            let left = 2 * i + 1
            let right = 2 * i + 2
            let largest = i
            if (left < n && this.compare(this.heap[left], this.heap[largest])) {
                largest = left;
            }
            if (right < n && this.compare(this.heap[right], this.heap[largest])) {
                largest = right;
            }
            if (largest == i) {
                break;
            }
            [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
            i = largest;
        }
    }

}
class MaxHeap extends Heap {
    constructor() {
        super((a, b) => a > b)
    }
}
class MinHeap extends Heap {
    constructor() {
        super((a, b) => a < b)
    }
}

class MedianFinder {
    constructor() {
        this.maxHeap = new MaxHeap();
        this.minHeap = new MinHeap();

    }


    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this._addToHeaps(num);
        this._rebalanceHeaps();
    }

    /**
     * @return {number}
     */
    findMedian() {
        return this._getMedianFromHeaps();
    }

    _addToHeaps(num) {
        if (this.maxHeap.size() == 0 || num <= this.maxHeap.peek()) {
            this.maxHeap.push(num)
        } else {
            this.minHeap.push(num);
        }
    }
    _rebalanceHeaps() {
        if (this.maxHeap.size() > this.minHeap.size() + 1) {
            this.minHeap.push(this.maxHeap.pop())
        } else if (this.minHeap.size() > this.maxHeap.size()) {
            this.maxHeap.push(this.minHeap.pop())
        }
    }
    _getMedianFromHeaps() {
        if (this.maxHeap.size() > this.minHeap.size()) {
            return this.maxHeap.peek();
        } else {
            return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
        }
    }
}
