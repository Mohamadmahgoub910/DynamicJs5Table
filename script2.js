// function test(div) {
//   //   var div = document.querySelector("div");
//   var oldVal = div.getAttribute("class");
//   var c = oldVal === "green" ? "red" : "green";
//   div.setAttribute("class", c);
// }

// var div = document.querySelector("div");
// div.onclick = function test() {
//   var oldVal = div.getAttribute("class");
//   var c = oldVal === "green" ? "red" : "green";
//   div.setAttribute("class", c);
// };
var div = document.querySelector("div");
function test() {
  var oldVal = div.getAttribute("class");
  var c = oldVal === "green" ? "red" : "green";
  div.setAttribute("class", c);
}
div.addEventListener("click", test);

// div.addEventListener("click", function test() {
//   var oldVal = div.getAttribute("class");
//   var c = oldVal === "green" ? "red" : "green";
//   div.setAttribute("class", c);
// });
function testP(e) {
  console.log(e.target);
}
