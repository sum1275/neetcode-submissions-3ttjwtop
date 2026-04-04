/**
 * item[0] = squared distance

item[1] = point itself [x, y] 
*/
class MaxHeap {
    constructor() {
        this.heap = []
    }
    size() {
        return this.heap.length
    }
    push(item) {
        this.heap.push(item);
        this.bubbleUp();
    }
    pop() {
        if (this.heap.length == 1) {
            return this.heap.pop();
        }
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return top;
    }
    top() {
        return this.heap[0];
    }
    bubbleUp() {
        let idx = this.heap.length - 1;
        while (idx > 0) {
            let parent = Math.floor((idx - 1) / 2);
            if (this.heap[parent][0] >= this.heap[idx][0]) {
                break;
            }
            [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]]
            idx = parent;
        }
    }
    bubbleDown() {
        let idx = 0;
        let length = this.heap.length
        while (true) {
            let left = 2 * idx + 1;
            let right = 2 * idx + 2;
            let largest = idx;
            if (left < length && this.heap[left][0] > this.heap[largest][0]) {
                largest = left;
            }
            if (right < length && this.heap[right][0] > this.heap[largest][0]) {
                largest = right;
            }
            if (largest == idx) {
                break
            }
            [this.heap[idx], this.heap[largest]] = [this.heap[largest], this.heap[idx]]
            idx = largest;
        }
    }
}

class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */

    kClosest(points, k) {
        const heap = new MaxHeap();
        for (let [x, y] of points) {
            const dist = x * x + y * y;
            if (heap.size() < k) {
                heap.push([dist, [x, y]]);
            } else if (dist < heap.top()[0]) {
                heap.pop()
                heap.push([dist, [x, y]])
            }
        }

        return heap.heap.map(item => item[1]);
    }
}
