let queryimg1 = document.querySelector("#img1");
let queryimg2 = document.querySelector("#img2");
// let queryimg3 = document.querySelector("#img3");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");

btn1.addEventListener("click", (event) => {
  display_none(event);
});
btn2.addEventListener("click", (event) => {
  visibility_hidden(event);
});
btn3.addEventListener("click", (event) => {
  reset(event);
});
function display_none(event) {
  //   queryimg1.innerHTML = `
  //     <img id="img1_none" src="https://placeimg.com/320/240/nature" alt="" />
  //   `;
  queryimg1.style.display = "none";
}
function visibility_hidden() {
  //   queryimg2.innerHTML = `<img id="img2_hidden" src="https://placeimg.com/320/240/nature" alt="" />`;
  queryimg2.style.visibility = "hidden";
}
function reset() {
  //   queryimg1.innerHTML = `<img id="img3_reset" src="https://placeimg.com/320/240/nature" alt="" />`;
  //   queryimg2.innerHTML = `<img id="img3_reset" src="https://placeimg.com/320/240/nature" alt="" />`;
  queryimg1.style.display = "block";
  queryimg2.style.visibility = "visible";
}
