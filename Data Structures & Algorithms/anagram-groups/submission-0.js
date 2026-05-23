class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let group=  new Map();
        for (let i =0; i<strs.length; i++){
            let newWord= strs[i]
            let key= newWord.split('').sort().join('');
            if(group.has(key)){
                let existingArray= group.get(key);
                existingArray.push(newWord)
                group.set(key,existingArray)
            }else{
                group.set(key,[newWord])
            }
        }
            console.log(group)
        return Array.from(group.values())
    }
}
