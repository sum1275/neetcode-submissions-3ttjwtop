class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = [];
        for (let i = 0; i < nums.length; i++) {
            let obj = {
                index: i,
                value: nums[i]
            };
            map.push(obj);


        }
        map.sort((a, b) => a.value - b.value);
        console.log(map)
        console.log('----')
        let left = 0, right = nums.length - 1;
      while (left < right) {
        let sum = map[left].value + map[right].value;

        if (sum === target) {
            return [map[left].index, map[right].index];
        } else if (sum > target) {
            right--;
        } else {
            left++;
        }
    }
        return [];
    }
}
// [3, 4, 5, 6] target  
//[{index:0,value:3},{index:1,value:4},{index:2,value:5},{index:3,value:6}]

// target-nums[i]
// 