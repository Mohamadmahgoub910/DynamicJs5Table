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
  var img = document.getElementById("chng");
  var oldSrc = img.getAttribute("src");
  console.log(oldSrc);
  var c = oldSrc === "imgs/m.png" ? "imgs/img.jpg" : "imgs/m.png";
  img.setAttribute("src", c);
});

// Next Image and Previous Image
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var imgSlide = document.getElementById("imgSlide");
var count = 0;
var counted;
// console.log(next);
// console.log(prev);
var ArrImgs = new Array();
ArrImgs = [
  "imgs/img.jpg",
  "imgs/img1.jpg",
  "imgs/img2.jpg",
  "imgs/img3.jpg",
  "imgs/img4.jpg",
  "imgs/m.png",
];
next.addEventListener("click", function () {
  var slid = document.getElementById("slide");
  if (count <= 4) {
    count++;
    slid.setAttribute("src", ArrImgs[count]);
  } else {
    alert("Game Over");
  }
});
prev.addEventListener("click", function () {
  var slid = document.getElementById("slide");
  if (count === 0) {
    alert("Game Over");
    count = 0;
  } else {
    count--;
    slid.setAttribute("src", ArrImgs[count]);
  }
});
function imgSlid() {
  count++;
  if (count == 5) {
    count = 0;
  }

  var slid = document.getElementById("slide");
  slid.setAttribute("src", ArrImgs[count]);
  counted = setTimeout("imgSlid()", 500);
}
function stopSlide() {
  clearTimeout(counted);
}
