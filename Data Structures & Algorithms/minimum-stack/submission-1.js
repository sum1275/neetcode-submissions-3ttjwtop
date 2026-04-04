class MinStack {
    constructor() {
        this.arr=[];
        this.minArr=[];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.arr.push(val);
        if(this.minArr.length==0){
this.minArr.push(val)
        }else{
            const currentMin=this.minArr[this.minArr.length-1];
            this.minArr.push(Math.min(currentMin,val));
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.arr.pop();
        this.minArr.pop();
    }

    /**
     * @return {number}
     */
    top() {
        if(this.arr.length==0){
            return null;
        }
        return this.arr[this.arr.length-1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minArr[this.minArr.length-1]
    }
}
