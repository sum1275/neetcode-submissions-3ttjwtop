class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let n = position.length;
        let cars = [];
        for (let i = 0; i < n; i++) {
            cars.push([position[i], speed[i]]);

        }
        cars.sort((a, b) => a[0] - b[0]);
        let time = new Array(n);
        for(let i=0;i<n;i++){
            time[i]=(target-cars[i][0])/cars[i][1];
        }
        let fleet=n;
        for(let i=n-1;i>=0;i--){
            for(let j=i+1;j<n;j++){
                if(time[i]<=time[j]){
                    fleet--;
                    break;
                }
            }
        }
        return fleet;
    }
}
