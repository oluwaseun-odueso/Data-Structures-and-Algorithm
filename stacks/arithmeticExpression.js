const Stack = require('./stack')

function findMissingPerenthesisPosition (expression) {
   var s = new Stack();

   for (var i = 0; i < expression.length; i++) {
      if (expression[i] === '(') {
         s.push(i)
      } 

      if (expression[i] === ')') {
         if (s.pop() === undefined) {
            console.log(`Mismatched ) at ${i}`)
         }
      }
   }

   if (s.length() === 0) {
      console.log("No mismatching parenthesis");
   } else if (s.length() === 1) {
      console.log(`Mismatching ( at position ${s.peek()}`)
   }
}

findMissingPerenthesisPosition("2.3 + 23 / 12 + (3.14159 * 24)")
