/**
 * We can use a stack to determine whether or not a given string 
 * is a palindrome. We take the original string and push each 
 * character onto a stack, moving from left to right.
 * When the end of the string is reached, the stack contains the 
 * original string in reverse order, with the last letter at the
 * top of the stack and the first letter at the bottom of the stack.
 * Once the complete original string is on the stack, we can 
 * create a new string by popping each letter the stack.
 * This process will create the original strin gin reverse order.
 * We then simply compare the original string with the reversed 
 * work, and if they are equal, the string is a palindrome.
 */

const Stack = require("./stack");


function isPalindrome(word) {
   var s = new Stack();
   for(var i = 0; i < word.length; i++) {
      s.push(word[i]);
   }
   var reversedWord = "";
   while (s.length() > 0) {
      reversedWord += s.pop();
   } if (word == reversedWord) {
      return true
   } else return false
}

var word = "hello";
if (isPalindrome(word)) {
console.log(word + " is a palindrome.");
} else {
console.log(word + " is not a palindrome.");
}

word = "racecar"
if (isPalindrome(word)) {
console.log(word + " is a palindrome.");
} else {
console.log(word + " is not a palindrome.");
}