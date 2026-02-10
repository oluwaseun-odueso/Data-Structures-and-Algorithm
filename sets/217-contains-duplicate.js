// var containsDuplicate = function(nums) {
//     const numsSet = new Set(nums)

//     const uniqueNums = [ ...numsSet]
//     console.log(nums)
//     console.log(uniqueNums)
//     if (uniqueNums === nums) {
//         return false
//     } else return true
// };

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // const numsSet = new Set(nums)
    // const uniqueNums = [ ...numsSet]
    
    // if (uniqueNums === nums) {
    //     return false
    // } else return true

    let numsSet = new Set()
    for (i = 0; i < nums.length; i++) {
        if (numsSet.has(nums[i])) {
            return true
        } else {
            numsSet.add(nums[i])
        }
    }
    return false
};

console.log(containsDuplicate([1, 2, 3, 4]))