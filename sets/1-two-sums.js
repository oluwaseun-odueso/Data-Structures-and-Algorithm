/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numsMap = new Map()
    
    for (i = 0; i < nums.length; i++) {
        const numb = target - nums[i]
        if (numsMap.has(numb)) {
            return [i, numsMap.get(numb)]
        } else {
            numsMap.set(nums[i], i)
        }
    }
};