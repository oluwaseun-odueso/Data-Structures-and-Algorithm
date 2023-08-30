const Stack = require('./stack')

var operands = new Stack();
var operators = new Stack();

var operandsFlip = new Stack();

function convertInfixToPostFix (input) {
   var numberString = ""

   for (var i = 0; i < input.length; ++i) {
      var current = input[i]
      if (current === '+' || current === '-' || current === '*' || current === '/') {
         operators.push(current);
         operands.push(numberString)
         numberString = ""
      } else {
         numberString += current
      }
   }
   operands.push(numberString)

   while (operands.length() > 0) {
      operandsFlip.push(operands.pop())
   }

   const operand1 = operandsFlip.pop();
   const operand2 = operandsFlip.pop();
   const operator = operators.pop();

   console.log(`Postfix expression: ${operand1}, ${operand2}, ${operator}`);
   const result = eval(operand1 + operator + operand2)

   console.log(`Postfix evaluated: ${result}`)
}

convertInfixToPostFix('100+5')