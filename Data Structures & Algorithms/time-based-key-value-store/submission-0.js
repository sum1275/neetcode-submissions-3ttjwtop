class TimeMap {
    constructor() {
        this.keyStore = {}
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore[key]) {
            this.keyStore[key] = []
        }
        this.keyStore[key].push([timestamp, value])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore[key]) {
            return "";
        }
        const arr = this.keyStore[key];
        let left = 0, right = arr.length - 1;
        let res = '';
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid][0] <= timestamp) {
                res = arr[mid][1]
                left=mid+1
            }else{
                right=mid-1
            }
        }
        return res;
    }
}
