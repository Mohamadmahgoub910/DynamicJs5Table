console.log("Welcome to Day4-1 Zo7lika");
// get text
var btn = document.querySelector("button");
btn.addEventListener("click", function () {
  var txt = document.querySelector("input").value;
  var content = document.getElementsByClassName("content")[0];
  if (txt !== "") {
    // console.log(txt);
    content.innerText = txt;
    content.style.backgroundColor = txt;
  }
});
