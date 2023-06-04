console.log("Welcome to Day4-1 Zo7lika");
// get text
// var btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   var txt = document.querySelector("input").value;
//   var content = document.getElementsByClassName("content")[0];
//   if (txt !== "") {
//     content.innerText = txt;
//     content.style.backgroundColor = txt;
//   }
// });

// change image on click
var imgBtn = document.getElementById("chngImg");
imgBtn.addEventListener("click", function () {
  var img = document.querySelector("img");
  var oldSrc = img.getAttribute("src");
  var c = oldSrc === "imgs/m.png" ? "imgs/img.jpg" : "imgs/m.png";
  img.setAttribute("src", c);
});
