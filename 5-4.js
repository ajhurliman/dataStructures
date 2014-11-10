//problem 5-4 data structures
'use strict';
function enterEd (name, priority, ed) {
  var p = new Patient(name, priority);
  ed.enqueue(p);
}

function seePatient(arr) {
  var patient = 0;
  for (var i = (arr.length-1); i >= 0; i-- {
    if (arr[i] > patient)
      patient = i;
  }
  var patient = arr[patient];
  arr.splice(i, 1);
  return patient;
}

function listPatients(arr) {
  console.log('Patients to be seen:');
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i] + '\n');
  }
}
