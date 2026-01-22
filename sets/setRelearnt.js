const myArray = [ 1, 2, 3, 4, 5, 5, 5, 1, 2 ]
const mySet = new Set(myArray)

console.log(myArray)
console.log(mySet) // will return a set of only unique characters

// You can convert the unique characters to an array using the spread operator
const uniqueArray = [ ...mySet ]
console.log(uniqueArray)