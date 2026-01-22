const myArray = [ 1, 2, 3, 4, 5 ]
const mySet = new Set(myArray)

// console.log(myArray)
// console.log(mySet) // will return a set of only unique characters

// You can convert the unique characters to an array using the spread operator
// const uniqueArray = [ ...mySet ]
// console.log(uniqueArray)

// METHODS
// ADD
// you can add different data types - int, float, bool, string, objects, arrays

// mySet.add({ bagName: "Channel"})
// console.log(mySet)

// DELETE
// mySet.delete(3)
// console.log(mySet)

// CLEAR - it accepts no parameters and it clears all the elements of the set
// mySet.clear()
// console.log(mySet)

// HAS - it checks if the set has a value
console.log(mySet.has(6))