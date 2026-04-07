class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let ans = [];
        let set=new Set();
        for (let i = 0; i < nums.length - 2; i++) {
           
            for (let j = i + 1; j < nums.length - 1; j++) {
                for (let k = j + 1; k < nums.length; k++) {
                    if (nums[i] + nums[j] + nums[k] == 0) {
                     let triplet= [nums[i],nums[j],nums[k]];
                     triplet.sort((a,b)=>a-b);
                     let key=triplet.join(',')
                     if(!set.has(key)){
                        set.add(key);
                        ans.push(triplet);
                     }
                    }
                }
            }
        }
return ans;
    }
}
