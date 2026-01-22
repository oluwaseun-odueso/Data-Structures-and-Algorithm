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
// console.log(mySet.has(6))

// console.log(mySet.size)



/* 
An array is an ordered list of objects, and the elements are accessed using integer indexes.
A set is an unodered pool of unique elements, and since it is unordered there is 
no integer index you can use to access specific elements of a set
*/


// MAPS - has set method
// const myMap = new Map([ ['name', 'John'], ['surname', "Adeola"] ])

const myMap = new Map([ [{}, 'a'], [{}, 'b'] ])

myMap.set({}, 'c')


console.log(myMap)