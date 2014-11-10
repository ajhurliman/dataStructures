'use strict';

function convert(input) {
  //make an array of the characters
  var expr = input.split('');

  var operators = [];
  var operands = [];
  var postFixExpr = '';

  //sort items into arrays, operators & operands
  for (var i = 0; i < expr.length; i++) {
    switch(expr[i]) {
      case '+': //fall through
      case '-': //fall through
      case '/': //fall through
      case '*': operators.push(expr[i]);
        break;
      default: operands.push(expr[i]); //anything but an operand is an operator
    }
  }

  //spit the contents back out from the arrays (start with
  //operators). operand array should go twice at end
  while (operators) {
    postFixExpr.push(operator.pop());
    postFixExpr.push(operand.pop());
  }
  postFixExpr.push(operand.pop());

  //pass results to postfixEval
  return postfixEval(expr);
}


function postfixEval(expr) {
  var operands = [];

  //advance through expr looking for an operator, then operate on the two preceeding numbers
  for (var i = 0; i < expr.length; i++) {
    //if an operator is encountered then process the operation in testOperator function
    var isOperator = testOperator(expr[i]);
    if (isOperator) {
      operands.push(isOperator); //push the result of the operation to the top of the stack and carry on
    } else {
      operands.push(expr[i]);
    }
  }

  function testOperator(char) {
    switch(char) {
      case '+': return (operands.pop() + operands.pop());
        break;
      case '-': return (operands.pop() - operands.pop());
        break;
      case '/': return (operands.pop() / operands.pop());
        break;
      case '*': return (operands.pop() * operands.pop());
        break;

      break;
      default: return false; //anything but an operand
    }
  }//end testOperator
}//end convert
