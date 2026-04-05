class MinHeap {
    constructor() {
        this.heap = [];
    }
    push(val) {
        this.heap.push(val);
        this.heapifyUp();
    }
    heapifyUp() {
        let i = this.heap.length - 1;
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (this.heap[parent][1] <= this.heap[i][1]) {
                break;
            }
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]]
            i = parent;
        }
    }
    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length == 1) {
            return this.heap.pop()
        }
        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown()
        return min;
    }
    heapifyDown() {
        let i = 0;
        let n = this.heap.length;
        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let smallest = i;
            if (left < n && this.heap[left][1] < this.heap[smallest][1]) {
                smallest = left;
            }
            if (right < n && this.heap[right][1] < this.heap[smallest][1]) {
                smallest = right;
            }
            if (smallest == i) {
                break;
            }
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            i = smallest;
        }
    }
    size(){
        return this.heap.length;
    }

}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    topKFrequent(nums, k) { 
        let map=new Map();
        for(let num of nums){
            map.set(num,(map.get(num)||0)+1);
        }
        let heap=new MinHeap();
        for(let [num,freq] of map){
            heap.push([num,freq]);
            if(heap.size()>k){
                heap.pop()
            }
        }
        let res=[];
        while(heap.size()){
            res.push(heap.pop()[0])
        }
        return res;
    }
}
