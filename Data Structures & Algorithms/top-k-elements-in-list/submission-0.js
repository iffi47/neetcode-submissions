class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count= {}
        let newArray = new Array(nums.length + 1);
        for(let i = 0; i < newArray.length; i++){
            newArray[i] = []; // Create a fresh array for each slot
        }
        for(let n of nums){
          count[n] = 1 + (count[n] || 0);
       }
        // console.log(count)
        for(const [items,values] of Object.entries(count)){
            newArray[values].push(Number(items));
            
        }
        let result=[]
        for (let i= newArray.length - 1; i >= 0; i--){
            for (let n of newArray[i]){
                result.push(n);
                if(result.length===k){
                    return result;
                }
            }

        }
    }
}