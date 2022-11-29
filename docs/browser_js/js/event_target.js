let querysingle = document.querySelector("#single");
// querysingle.addEventListener("click", singleEvent);
querysingle.addEventListener("click", (event) => {
  singleEvent(event);
});
// querysingle.addEventListener("double-click", singleEvent);

function singleEvent(event) {
  console.log(event);
  querysingle.innerHTML = "Take One Event";
}

//remove : 공간x
//display:none : 공간은 남고 안보임
// visibility : hidden
// display = "block"
// visibility = "visible"

let querykeydown = document.querySelector("#keydown");
querykeydown.addEventListener("keydown", (event) => {
  if (event.code == "Enter") {
    keydownDesc(querykeydown.value);
  }
});

function keydownDesc(desc) {
  let querykeydownDesc = document.querySelector("#keydownDesc");
  querykeydownDesc.innerHTML = desc;
}

let queryload = document.querySelector("#keydownDesc");
// let queryload = document.querySelector("body");
queryload.addEventListener("load", queryLoad());

function queryLoad() {
  queryload.innerHTML = "Done on Load";
}
