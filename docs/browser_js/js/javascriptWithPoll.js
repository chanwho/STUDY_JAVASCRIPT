const questions_list = [
  {
    question: "해당 매장을 방문시 매장은 청결 하였습니까?",
    questions_uid: "Q1",
    order: 1,
  },
  {
    question: "주문시 직원은 고객님께 친절 하였습니까?",
    questions_uid: "Q2",
    order: 2,
  },
  {
    question: "주문하신 음료가 나오기까지 시간이 적당하였습니까?",
    questions_uid: "Q3",
    order: 3,
  },
  {
    question: "해당 매장을 다음에도 재방문 하실 의향이 있으십니까?",
    questions_uid: "Q5",
    order: 4,
  },
  {
    question: "직원이 제조한 음료에 대해 맛은 좋았습니까?",
    questions_uid: "Q4",
    order: 5,
  },
];

const example_list = [
  { example: "전혀 아니다", example_uid: "E1", order: 1 },
  { example: "아니다", example_uid: "E2", order: 2 },
  { example: "보통이다", example_uid: "E3", order: 3 },
  { example: "그렇다", example_uid: "E4", order: 4 },
  { example: "매우 그렇다", example_uid: "E5", order: 5 },
];

const answers = [
  { questions_uid: "Q1", example_uid: "E1" },
  { questions_uid: "Q1", example_uid: "E2" },
  //   { questions_uid: "Q1", example_uid: "E3" },
  { questions_uid: "Q2", example_uid: "E1" },
  { questions_uid: "Q2", example_uid: "E2" },
  { questions_uid: "Q2", example_uid: "E3" },
  //   { questions_uid: "Q2", example_uid: "E4" },
  { questions_uid: "Q3", example_uid: "E1" },
  { questions_uid: "Q3", example_uid: "E2" },
  { questions_uid: "Q4", example_uid: "E1" },
  { questions_uid: "Q4", example_uid: "E2" },
  { questions_uid: "Q4", example_uid: "E3" },
  { questions_uid: "Q4", example_uid: "E4" },
  { questions_uid: "Q4", example_uid: "E5" },
  { questions_uid: "Q5", example_uid: "E1" },
  { questions_uid: "Q5", example_uid: "E2" },
  { questions_uid: "Q5", example_uid: "E3" },
];

let processNum = 0;
let queryquestion = document.querySelector("#question");
let queryanswer = document.querySelector("#answer");

let querybtnNext = document.querySelector("#nextbtn");
querybtnNext.addEventListener("click", nextquestion);

let querybtnprev = document.querySelector("#prevbtn");
querybtnprev.addEventListener("click", prevquestion);

let queryload = document.querySelector("body");
queryload.addEventListener("load", nextquestion(), true);

function nextquestion() {
  if (processNum == 5) {
    alert("마지막화면입니다");
    return;
  } else {
    queryanswer.innerHTML = "";
    queryanswer = document.querySelector("#answer");
    let processStr = "Q" + (processNum + 1).toString();
    for (let i of answers) {
      if (i.questions_uid == processStr) {
        queryquestion.innerHTML = `<div> (${processNum + 1}) ${
          questions_list[processNum]["question"]
        }</div>`;
        for (let j of example_list) {
          if (i.example_uid == j.example_uid)
            queryanswer.innerHTML += `<div><input type="radio" name="answer_uid_radio" id="${
              j.example_uid
            }"/>(${j.example_uid.slice(1)}) ${j.example}</div>`;
        }
      }
    }
    processNum += 1;
  }
}

function prevquestion() {
  if (processNum == 0) {
    alert("처음화면입니다");
    return;
  } else {
    processNum -= 1;
    queryanswer.innerHTML = "";
    queryanswer = document.querySelector("#answer");
    let processStr = "Q" + (processNum + 1).toString();
    for (let i of answers) {
      if (i.questions_uid == processStr) {
        queryquestion.innerHTML = `<div> (${processNum + 1}) ${
          questions_list[processNum]["question"]
        }</div>`;
        for (let j of example_list) {
          if (i.example_uid == j.example_uid)
            queryanswer.innerHTML += `<div><input type="radio" name="answer_uid_radio" id="${
              j.example_uid
            }"/>(${j.example_uid.slice(1)}) ${j.example}</div>`;
        }
      }
    }
  }
}
