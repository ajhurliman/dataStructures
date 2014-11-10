//Accordingtolegend,thefirst-centuryJewishhistorianFlaviusJosephuswasabout to be captured along with a band of 40 compatriots by Roman soldiers during the Jewish-Roman War. The Jewish soldiers decided that they preferred suicide to being captured and devised a plan for their demise. They were to form a circle and kill every third soldier until they were all dead. Josephus and one other decided they wanted no part of this and quickly calculated where they needed to place themselves so they would be the last survivors. Write a program that allows you to place n people in a circle and specify that every mth person will be killed. The program should determine the number of the last two people left in the circle. Use a circularly linked list to solve the problem.

var romans = new LList();
//create list of romans, numbered 0-39
for (var i = 0; i < 40; i++) {
  insert(i, i);
}

//kill everyone but Josephus and the other guy
for (var i = 0; i<38; i++) {
  remove(i);
}
//these are the last two to be killed, they should
//take these spots
display(romans);

function Node(element) {
  this.element = element;
  this.next = null;
}

function LList() {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.findPrevious = findPrevious;
  this.remove = remove;
}

function remove(item) {
  var prevNode = this.findPrevious(item);
  if (!(prevNode.next == null)) {
    prevNode.next = prevNode.next.next;
  }
}

function findPrevious(item) {
  var currNode = this.head;
  while (!(currNode.next == null) &&
             (currNode.next.element != item)) {
        currNode = currNode.next;
  }
  return currNode;
}

function display() {
var currNode = this.head;
while (!(currNode.next == null)) {
      print(currNode.next.element);
      currNode = currNode.next;
   }
}

function find(item) {
  var currNode = this.head;
  while (currNode.element != item) {
    currNode = currNode.next;
  }
  return currNode.element;
}

function show(item) {
  var target = find(item);
  console.log(target);
}

function advance(item, n) {
  var position =  find(item);
  remove(item);
  insert(item, (position + n));
}

function insert(newElement, item) {
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
}
