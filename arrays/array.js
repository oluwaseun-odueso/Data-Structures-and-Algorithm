// CREATING NEW ARRAYS FROM EXISTING ARRAYS
var cisDept = ['Mike', 'Clayton', 'Terrill', 'Danny', 'Jennifer']
var dmpDept = ['Raymoond', 'Cynthia', 'Bryan']
var ltDiv = cisDept.concat(dmpDept)

// Adding and Removing elements from the middle of an array
var nums = [1, 2, 3, 7, 8, 9];
var newElements = [4, 5, 6];
nums.splice(3, 0, 4, 5, 6, 7, 8, 9);

// Using splice to remove elements from an array
var nums = [1, 2, 3, 100, 200, 300, 400, 4, 5];
nums.splice(3, 4);

// PUTTING ARRAY ELEMENTS IN ORDER
// reverse()
var nums = [1, 2, 3, 4, 5];
nums.reverse();

// sort(): works well with strings but not numbers
var names = ["David", "Mike", "Cynthia", "Clayton", "Bryan", "Raymond"]
names.sort();

var nums = [3, 1, 2, 100, 4, 200]
nums.sort();

// Better way to sort numbers
function compare(num1, num2) {
   return num1 - num2
};

var nums = [3, 1, 2, 100, 4, 200];
nums.sort(compare)

// ITERATOR FUNCTIONS
// Non-array generating iterator functions
// forEach ()

function square(num) {
   // console.log (num * num)
}
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Cannot be assigned to a variable, doesn't change the original array
nums.forEach(square)

// every()
function isEven(num) {
   return num % 2 == 0;
};

var nums = [2, 4, 6, 8, 10];
// Can be assigned to a variable
var even = nums.every(isEven);
if (even) {
   // console.log("all numbers are even")
} else {
   // console.log("not all numbers are even")
}

// some()
var nums = [1, 7]
var someEven = nums.some(isEven);
if (someEven) {
   // console.log("some numbers are even")
} else {
   // console.log("no numbers are even")
}

// reduce()
function add(runningTotal, currentValue) {
   return runningTotal + currentValue;
}

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = nums.reduce(add)
console.log(sum)