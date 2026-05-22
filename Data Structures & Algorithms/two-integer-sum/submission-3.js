class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let mapSet = new Map();
        let output =[]
        for(let i=0; i<nums.length; i++){
            let compliment = target- nums[i];
            if(mapSet.has(compliment)){
                output=[mapSet.get(compliment), i]
            }else{
                mapSet.set(nums[i], i)
            }
        }
        return output;
    }
}