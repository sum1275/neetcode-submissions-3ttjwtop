class MinStack {
    constructor() {
        this.arr = [];
        this.minStack = [];
    }

    push(val) {
        this.arr.push(val);
        if (this.minStack.length === 0) {
            this.minStack.push(val);
        } else {
            const currentMin = this.minStack[this.minStack.length - 1];
            this.minStack.push(Math.min(val, currentMin));
        }
    }

    pop() {
        this.arr.pop();
        this.minStack.pop();
    }

    top() {
        return this.arr[this.arr.length - 1];
    }

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
