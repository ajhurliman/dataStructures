//problem 5-2 data structures

function testPalindrome(input) {
  input = input.split('');
  var front = [];
  var back = [];
  while (input) {
    front.push(input.shift());
    back.push(input.pop());
  }
  while (back) {
    if (front[0] !== back[0]) {
      return false;
    } else {
      front.shift();
      back.shift();
    }
  }
  return true;
}
