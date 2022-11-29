// taskInput.style.display = "flex";
// taskInput.style.displaydirection = "space-around";
let taskName = document.querySelector("#taskName");
let queryTotal_div = document.querySelector(".total_div");
let queryNewTasks = document.querySelector("#newTasks");
let addbtn = document.querySelector("#addbtn");

addbtn.addEventListener("click", (event) => {
  addTaskFn(event);
});
taskName.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    addTaskFn(event);
    return;
  }
});

function addTaskFn(event) {
  if (taskName.value == "") {
    alert("please enter a task");
  }
  let newTaskText = `<div id="newtask"><div id = 'newTaskTextbox'>
    <span>${taskName.value}</span>
    </div>
    <div id = 'icon'>
    <div><span><i class="material-icons">delete</i></span></div>
    <div><span class="material-symbols-outlined">favorite</span></div>
    </div>
    </div>
    `;
  newTasks.insertAdjacentHTML("beforeend", newTaskText);
}

let heartflag = true;
queryNewTasks.addEventListener("click", (event) => {
  if (event.target.innerHTML == "delete") {
    event.target.parentElement.parentElement.parentElement.parentElement.remove();
  } else if (event.target.innerHTML == "favorite") {
    let queryheartIcon = document.querySelector(".material-symbols-outlined");
    if (heartflag) {
      queryheartIcon.style =
        "font-variation-settings:'FILL' 1,'wght' 400, 'GRAD' 0,'opsz' 48";
      heartflag = false;
    } else if (heartflag == false) {
      queryheartIcon.style =
        "font-variation-settings:'FILL' 0,'wght' 400, 'GRAD' 0,'opsz' 48";
      heartflag = true;
    }
  }
});
