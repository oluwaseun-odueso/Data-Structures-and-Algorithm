/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const myMap = new Map()
    for (i = 0; i < strs.length; i++) {
        // key value pairs
        // sorted characters is the key
        // the array is the value
        // use .set, .get and .has map methods
        // use .push array method to push the value to the values

        const currentStr = strs[i].split("").sort().join("")
        // s1.split('').sort().join('')
        if (myMap.has(currentStr)) {
            const oldArray = myMap.get(currentStr)
            oldArray.push(strs[i])
            // continue
        } else {
            // const oldArray = myMap.get(currentStr)
            myMap.set(currentStr, [strs[i]])
        }
    }
    // return myMap

    const result = new Array()

    myMap.forEach((values, keys) => {
        result.push(values)
    })

    console.log(result)
};

groupAnagrams(["eat","tea","tan","ate","nat","bat"])

/***
 * 
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * 
 * ***/