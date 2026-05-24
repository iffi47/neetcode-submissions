class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left= 0;
    let right=nums.length-1;
    let tempValue=0
    while(left<=right){
        let middle= Math.floor(left+(right-left)/2);
        tempValue=nums[middle];
        if(tempValue===target)
        {
            return middle
        }else if(nums[left]<=nums[middle]){
            if(nums[left]<=target && target<nums[middle]){
                right=middle-1
            }else{
               left= middle+1 
            }
        }else{
            if(nums[right]>=target && nums[middle]<target){
                left= middle+1
            }else{
                right= middle-1
            }
        }
    }
        return -1
    }
}
