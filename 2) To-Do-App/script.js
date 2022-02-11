// select elements and assign theme into variables
let newTask = document.querySelector("#newTask");
let form = document.querySelector("form");
let incompleteTask = document.querySelector(".incomplete-task");
let completedTask = document.querySelector(".completed-task");

// create incomplete task html markup
let createIncompleteTask = function (task) {
  incompleteTask.innerHTML +=
    '<div class="incomplete-todo d-flex justify-content-between align-items-center mb-2">' +
    '<p class="mb-0">' +
    task +
    "</p>" +
    '<div class="incomplete-todo-icon">' +
    '<span id="complete" onclick="completeTask(this);">✔️</span>' +
    "</div>" +
    "</div>" +
    "</div>";
};

// create complete task markup
let createCompleteTask = function (task) {
  completedTask.innerHTML +=
    '<div class="complete-todo d-flex justify-content-between align-items-center mb-2">' +
    '<p class="mb-0">' +
    task +
    "</p>" +
    '<span id="delete" onclick="deleteTask(this);">❌</span>' +
    "</div>";
};

//Add task
let addTask = function (event) {
  event.preventDefault();

  if (newTask.value == null || newTask.value === "") {
    alert("Input field can't be empty!");
    return;
  }
  createIncompleteTask(newTask.value);
  newTask.value = "";
};

// Complete Task
function completeTask(obj) {
  let confirm = window.confirm("Want to make the to do as complete?");
  if (confirm) {
    let incompleteValue = obj
      .closest(".incomplete-todo")
      .querySelector("p").innerHTML;
    createCompleteTask(incompleteValue);

    obj.closest(".incomplete-todo").remove();
  }
}

// Delete Task
function deleteTask(obj) {
  obj.parentNode.remove();
  let confirm = window.confirm("Are you want to sure delete?");
  if (confirm) {
    obj.parentNode.remove();
  }
}

form.addEventListener("submit", addTask);
