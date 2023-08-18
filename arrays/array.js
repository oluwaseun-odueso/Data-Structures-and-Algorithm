// Creating new arrays from existing arrays
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

// Putting array elemets in order
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

