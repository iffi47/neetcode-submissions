class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        
        if(s.length !== t.length){return false }
        let counts=  new Array(26).fill(0);
        for(let i=0; i<s.length; i++){
            let indexS = s.charCodeAt(i) - 'a'.charCodeAt(0);
            counts[indexS]++;
            let indexT= t.charCodeAt(i) - 'a'.charCodeAt(0);
            counts[indexT]--; 
        }
        return counts.every((count)=>  count===0 )
    }
}
