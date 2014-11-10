//problem 4-3 data structures
//expects an array of strings, some are 'yellow'
'use strict';
var Stack = require('./stack');

function noYellows(input) {
  var holdingStack = new Stack();

  //fill up holdingStack with the reverse of the input sans the yellows
  while (input) {
    var inputTop = input.pop();
    if (inputTop !== 'yellow') {
      holdingStack.push(inputTop);
    }
  }//end while loop

  //fill up the input with the holdingStack, thereby reversing the order to it's original orientation
  while (holdingStack) {
    input.push(holdingStack.pop());
  }

  return input;
}
