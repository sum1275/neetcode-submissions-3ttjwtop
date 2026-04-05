class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        for (let num of nums) {
            map.set(num, (map.get(num) || 0) + 1)
        }
       let sortedMap=[...map].sort((a,b)=>b[1]-a[1]);
       let res=[];
       for(let i=0;i<k;i++){
        res.push(sortedMap[i][0]);
       }
       return res;
    }
    
}
