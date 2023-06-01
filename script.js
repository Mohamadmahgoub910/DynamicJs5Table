console.log("Welcome To Day4 Z3bollah");
var size;
do {
  size = parseInt(prompt("Enter the num of persons"));
  if (size === 0) {
    alert("y3m d5l rkm y3m");
  } else {
    alert("size is " + size);
  }
} while (!Number(size));
/**
 * name length should be more than 3 and less than 10 characters
age: should be greater than 10 and less than 60.
 */
var flag;
var arr = new Array(size);
var arrNames = new Array();
var arrAges = new Array();
for (var i = 0; i < size; i++) {
  /////////////////////////////////////////////
  var EmpName = prompt("enter you name");
  if (EmpName.length < 10 && EmpName.length > 3) {
    flag = "valid data";
    arr.push(EmpName);
    arrNames.push(EmpName);
    alert(flag);
  } else {
    flag = "Input not valid";
    alert(flag);
  }
  /////////////////////////////////////////
  var age = parseInt(prompt("Enter the age"));
  if (age > 10 && age < 60) {
    flag = "valid data";
    arr.push(age);
    arrAges.push(age);
    alert(flag);
  } else {
    flag = "Input not valid";
    alert(flag);
  }
}
console.log(arrNames);
console.log(arrAges);
// var index = 0;
// for (index in arr) {
//   console.log(index + " with data : " + arr[index]);
// }
// create row to add data in the table
var tbody = document.getElementsByTagName("tbody")[0];
for (var i = 0; i < arrNames.length; i++) {
  tr = document.createElement("tr");
  tr.innerHTML = "<td>" + arrNames[i] + "</td>" + "<td>" + arrAges[i] + "</td>";
  //   tbody.innerHTML += tr;
  tbody.append(tr);
}
