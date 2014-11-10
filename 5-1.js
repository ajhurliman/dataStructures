//problem 5-1 data structures
function Deque() {
  this.dataStore = [];
  this.pop = pop;
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
}
function pop() {
  return this.dataStore.pop();
}
function enqueue(element) {
  this.dataStore.push(element);
}
function dequeue() {
  return this.dataStore.shift();
}
function front() {
  return this.dataStore[0];
}
function back() {
  return this.dataStore[this.dataStore.length-1];
}
function toString() {
  var retStr = "";
  for (var i = 0; i < this.dataStore.length; ++i) {
    retStr += this.dataStore[i] + "\n";
  }
  return retStr;
}

function empty() {
  if (this.dataStore.length == 0) {
  return true;
  } else {
  return false;
  }
}


// test program
var q = new Queue();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
print(q.toString());
print("Front of queue: " + q.shift());
print("Back of queue: " + q.pop());
