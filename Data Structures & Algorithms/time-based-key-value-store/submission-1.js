class TimeMap {
    constructor() {
        this.map = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.map.has(key)) {
            this.map.set(key, []);
        }
        this.map.get(key).push([timestamp, value])
    }
    /**Map {
      "apple" → [ (1, "red"), (3, "green") ]
    }
     */
    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) { 
        if(!this.map.has(key)){
            return "";
        }
        let arr=this.map.get(key);
        let left=0,right=arr.length-1;
        let result='';
        while(left<=right){
            let mid=left+Math.floor((right-left)/2);
            if(arr[mid][0]<=timestamp){
                result=arr[mid][1];
                left=mid+1
            }else{
                right=mid-1;
            }
        }
        return result;
    }
}
