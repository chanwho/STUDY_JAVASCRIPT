let queryTitle = document.querySelector("#title");
// queryTitle.innerHTML = "query Title!";

let queryItems = document.querySelectorAll(".item");
// queryItems.forEach((item, index) => {
//   console.log(item);
// });

let queryLists = document.querySelectorAll(".list");
let queryList = document.querySelector(".list");

let PByTagName = document.getElementsByTagName("p");
console.log(`${PByTagName}`);

// buttonByTagName.innerHTML = "클릭하세요";

let listByClassName = document.getElementsByClassName("list");
console.log(`${listByClassName}`);

let titleById = document.getElementById("title");
// titleById.innerHTML = "Title By Id";

let elementById = document.getElementById("selector");
// console.log(`elementById : ${elementById}`);
// elementById.innerHTML = "<b>Change selector<b/>";

queryTitle.style.color = "blue";
queryTitle.style.fontSize = "2rem";
queryTitle.style.backgroundColor = "rgba(255,0,0,0.5)";

let queryContent = document.querySelector(".content-class");
