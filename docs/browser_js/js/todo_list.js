// taskInput.style.display = "flex";
// taskInput.style.displaydirection = "space-around";
let taskName = document.querySelector("#taskName");
let queryTotal_div = document.querySelector(".total_div");
let queryNewTask = document.querySelector("#newTask");
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

let newTaskText = `<div class = 'newTasks'>
${taskName.value}
</div>`;

function addTaskFn(event) {
  if (taskName.value == "") {
    alert("please enter a task");
  }
  newTask.insertAdjacentHTML("beforeend", newTaskText);
}
