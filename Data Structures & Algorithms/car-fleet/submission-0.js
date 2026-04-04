class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let temp = [];
        for (let i = 0; i < position.length; i++) {
            let time = (target - position[i]) / speed[i];
            temp.push([position[i], time]);
        }
        temp.sort((a, b) => b[0] - a[0]);
        let fleet = 0;
        let lastFleetTime = 0;
        for(let [pos, time] of temp) {
            if (time > lastFleetTime) {
                fleet++;
                lastFleetTime = time;
            }
        }
        return fleet;
    }
}
