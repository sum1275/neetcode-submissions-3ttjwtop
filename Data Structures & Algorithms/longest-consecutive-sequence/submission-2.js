class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set=new Set(nums);
        let max=0;
        for(let num of set){
            if(!set.has(num-1)){
                let curr=num;
                let count=1;
                while(set.has(curr+1)){
                    curr++;
                    count++;

                }
                max=Math.max(max,count);
            }
        }
        return max;
    }
}
