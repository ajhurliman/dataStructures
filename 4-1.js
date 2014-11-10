//Problem 4-1, Data Structures

'use strict';
//expects an arithmetic expression as a string
function testParen (input) {
  var expr = input.split('');
  var leftCount = 0;
  var rightCount = 0;

  for (var i = 0; i < expr.length; i++) {
    if (expr[i] === ')') {
      rightCount++;
    } else if ((expr[i] === '(')) {
      leftCount++;
    }

    var valid = validCount(leftCount, rightCount);
    if (!valid) {
      //if there are ever more right parens than left, there's an error
      return ('Unexpected ")" at character #' + i);
    }
  } //end enumeration through expression

  //if you make it through the list and the num of each doesn't match each
  //other, there aren't enough rights because we were already checking for
  //too many rights above, and if they're equal it would pass
  if (leftCount !== rightCount) {
    return ('Expected ")" at character #' + expr.length);
  } else {
    return "No errors!";
  }
}

function validCount (leftCount, rightCount) {
  if (leftCount < rightCount) {
    return false;
  }
}



