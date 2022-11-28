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

let answers_arr = [];
let answers_arr_arr = [];
let answers_obj = [];
let compare_element = "";
let idx = 0;

// answers_arr과 answers_arr_arr 생성
answers.forEach((element) => {
  if (compare_element != element["questions_uid"]) {
    idx += 1;
    answers_arr.push(element["questions_uid"]);
    answers_arr.push(element["example_uid"]);
    answers_arr_arr.push([element["questions_uid"], element["example_uid"]]);
  } else {
    answers_arr.push(element["example_uid"]);
    answers_arr_arr[idx - 1].push(element["example_uid"]);
  }
  compare_element = element["questions_uid"];
});

// answers_obj 생성
for (let i = 0; i < answers_arr_arr.length; i++) {
  answers_obj[i] = { questions_uid: answers_arr_arr[i][0] };
  answers_obj[i].example_uid = answers_arr_arr[i].slice(1);
}

function getQuestionByuid(questions_uid) {
  for (let i of questions_list)
    if (questions_uid == i["questions_uid"]) {
      return i["question"];
    }
}

function getExampleByuid(example_uid) {
  for (let i of example_list) {
    if (example_uid == i["example_uid"]) {
      return i["example"];
    }
  }
}

let queryQuestion = document.querySelector("#question_div");
let queryAnswer = document.querySelector("#answer_div");

function setContent(ProbNum) {
  queryAnswer.innerHTML = "";
  queryQuestion.innerHTML = `${ProbNum + 1}. ${getQuestionByuid(
    answers_obj[ProbNum]["questions_uid"]
  )}`;
  for (let i = 0; i < answers_obj[ProbNum]["example_uid"].length; i++) {
    queryAnswer.innerHTML += `(${i + 1}) ${getExampleByuid(
      answers_obj[ProbNum]["example_uid"][i]
    )} `;
  }
}

let pageNum = 0;
setContent(pageNum);

function nextProb() {
  if (pageNum > answers_obj.length - 2) {
    window.alert("마지막 번호입니다");
  } else {
    pageNum += 1;
    setContent(pageNum);
  }
}

function prevProb() {
  if (pageNum < 1) {
    window.alert("첫번째 번호입니다");
  } else {
    pageNum -= 1;
    setContent(pageNum);
  }
}

let nextbtn = document.querySelector("#nextbtn");
nextbtn.addEventListener("click", nextProb);
let prevbtn = document.querySelector("#prevbtn");
prevbtn.addEventListener("click", prevProb);
