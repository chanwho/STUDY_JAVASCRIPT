// div.inner 태그 내부에 <div>hello</div>를 추가 (create element)
// 프로그래밍 방식 적용 (inner html)
let queryinner = document.querySelector("#container > .inner");
let element = document.createElement("div");
let helloText = document.createTextNode("hello");
element.appendChild(helloText);
queryinner.appendChild(element);

// inner html
let animal = { name: "dog", age: 10 };
let queryApp = document.querySelector("#app");

// item = "<div class = item>" + animal["name"] + animal["age"] + "</div>";
let item = `<div class = item>${animal["name"]} : ${animal["age"]} </div>`;
queryApp.innerHTML = item;

const productsData = [
  { title: "감자칩", weight: 300 },
  { title: "칙촉", weight: 100 },
  { title: "고구마칩", weight: 300 },
];

let querysnacks = document.querySelector("#list");
for (let i = 0; i < productsData.length; i++) {
  querysnacks.innerHTML += `<div class = snack> title :${productsData[i]["title"]}, weight : ${productsData[i]["weight"]}</div>`;
}
