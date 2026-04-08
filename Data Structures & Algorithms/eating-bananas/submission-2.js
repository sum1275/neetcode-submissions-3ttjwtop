class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left=1;
        let right=Math.max(...piles);
        while(left<=right){

            let mid=left+ Math.floor((right-left)/2);
            let totalHours=0;
            for(let pile of piles){
                totalHours+=Math.ceil(pile/mid)
            }
            if(totalHours<=h ){
                right=mid-1;
            }else{
                left=mid+1;
            }
        }
        return left;
    }
}
