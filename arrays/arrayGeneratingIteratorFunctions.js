// Iterator functions that return a new array
function curve(grade) {
   return grade += 5;
}

var grades = [77, 65, 81, 92, 83];
var newGrades = grades.map(curve);
// console.log(newGrades)

// can be used with strings too
function first(word) {
   return word[0]
}

var words = ['for', 'your', 'information']
var acronym = words.map(first)
// console.log(acronym.join(''))

// filter()
function isEven(num) {
   return num % 2 == 0;
}

function isOdd(num) {
   return num % 2 != 0
}

var nums = []
for (var i = 0; i < 20; ++i) {
   nums[i] = i + 1;
}

var evens = nums.filter(isEven)
console.log("Even numbers: ")
console.log(evens)
var odds = nums.filter(isOdd);
console.log("odd numbers: ")
console.log(odds)