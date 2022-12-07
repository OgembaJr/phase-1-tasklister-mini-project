document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  
  const myForm = document.getElementById("create-task-form");
  myForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const tasksNew = document.getElementById("new-task-description");
    const taskVar = document.getElementById("tasks");
    const newTaskList = document.createElement("li");
    newTaskList.innerText = tasksNew.value;
    taskVar.appendChild(newTaskList);
    e.target.reset();

  });

});