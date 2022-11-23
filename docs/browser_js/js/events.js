function changeText() {
  let querychangetext = document.querySelector("#changeText");
  querychangetext.innerHTML = "Change on me";
}
let queryclickalert = document.querySelector("#clickalert");
// element.addEventListener(event,function,useCapture)
queryclickalert.addEventListener("click", clickalert);
function clickalert() {
  alert("Click on Me with alert");
}

let querybutton = document.querySelector("#buttonchangeText");
querybutton.addEventListener("click", targetText);

function targetText(event) {
  let querychangetext = document.querySelector("#targetText");
  querychangetext.innerHTML = "Target text changed!";
}
