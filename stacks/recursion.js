const Stack = require("./stack");

// Recursive function to calculaye the factorial of any number
function factorial(n) {
   if(n == 0) {
      return 1;
   } else return n * factorial(n - 1)
}

/**
 * To simulate computing factorial using a stack, first push the 
 * numbers n to 1 onto a stack. Then, inside a loop, pop each 
 * number and multiply the number by the running product, resulting 
 * in the correct answer.
 */

// Simulating recursive processes using a stack
function fact(n) {
   var s = new Stack();
   while (n > 1) {
      s.push(n--)
   }
   var product = 1;
   while (s.length() > 0) {
      product *= s.pop()
   } return product
}

console.log(factorial(5))
console.log(fact(5))