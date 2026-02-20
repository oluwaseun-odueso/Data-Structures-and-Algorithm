/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if (p.length > s.length) return []

    let pMap = convertToMap(p)
    let sMap = convertToMap(s.slice(0, p.length))

    let result = []

    if (areMapsEqual(sMap, pMap)) result.push(0)
    let leftPointer = 0

    for (let rightPointer = p.length; rightPointer < s.length; rightPointer++) {
        // console.log("old sMap", sMap);
        sMap.set(s[leftPointer], sMap.get(s[leftPointer]) - 1);
        
        if (sMap.get(s[leftPointer]) === 0) {
        sMap.delete(s[leftPointer]);
        }
        
        if (sMap.has(s[rightPointer])) {
        sMap.set(s[rightPointer], sMap.get(s[rightPointer]) + 1);
        } else {
        sMap.set(s[rightPointer], 1);
        }
        // console.log("New sMap", sMap);

        leftPointer += 1;
        if (areMapsEqual(sMap, pMap)) result.push(leftPointer);
    }
    
    return result
};



var convertToMap = function (p) {
    const myMap = new Map()
    for (i = 0; i < p.length; i++) {
        if (myMap.has(p[i])) {
            const existingValue = myMap.get(p[i])
            myMap.set(p[i], existingValue + 1)
        } else {
            myMap.set(p[i], 1)
        }
    }
    
    return myMap
}

var areMapsEqual = function (map1, map2) {
    if (map1.size !== map2.size) return false
    for (let [key, val] of map1) {
        if (!map2.has(key) || map2.get(key) !== val) return false
    }
    return true
}

console.log(findAnagrams("abab", "ab"))