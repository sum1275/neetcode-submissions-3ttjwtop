class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        let left=0,right=numbers.length-1;
        while(left<right){
            if(numbers[right]+numbers[left]==target){
                return [left+1,right+1];
            }else if(numbers[right]+numbers[left]>target){
                right--;
            }else{
                left++;
            }

        }
        return [];

    }
}
