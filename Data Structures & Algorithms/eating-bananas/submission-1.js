class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let maxPiles=Math.max(...piles);
        for(let k=1;k<=maxPiles;k++){
            let totalHour=0;
            for(let pile of piles){
                totalHour+=Math.ceil(pile/k);
            }
            if(totalHour<=h){
                return k;
            }
        }
        return -1;
    }
}
