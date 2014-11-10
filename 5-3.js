//problem 5-3 data structures
function Patient(name, code) {
  this.name = name;
  this.code = code;
}

'use strict';
var p = new Patient("Smith",5);
var ed = new Queue();
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p = new Patient("Ingram", 1);
ed.enqueue(p);

print(ed.toString());
var seen = ed.dequeue();
print("Patient being treated: " + seen[0].name); print("Patients waiting to be seen: ") print(ed.toString());
// another round
var seen = ed.dequeue();
print("Patient being treated: " + seen[0].name); print("Patients waiting to be seen: ") print(ed.toString());
var seen = ed.dequeue();
print("Patient being treated: " + seen[0].name);
print("Patients waiting to be seen: ")
print(ed.toString());

function findPriority(arr) {
  var patient = 0;
  for (var i = (arr.length-1); i >= 0; i-- {
    if (arr[i] > patient)
      patient = i;
  }
  var patient = arr[patient];
  arr.splice(i, 1);
  return patient;
}
