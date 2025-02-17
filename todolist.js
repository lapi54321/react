function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    
    if (!taskText) return;

    let li = document.createElement("li");
    li.classList.add("task");
    li.innerHTML = `
        ${taskText} 
        <button onclick="markCompleted(this)">Mark as Done</button>
        <button onclick="editTask(this)">Edit</button>
    `;

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
    updateTaskCount();
}

function markCompleted(button) {
    let li = button.parentElement;
    li.classList.toggle("completed");
    updateTaskCount();
}

function editTask(button) {
    let li = button.parentElement;
    let taskText = li.firstChild.textContent.trim();
    let newTaskText = prompt("Edit task:", taskText);

    if (newTaskText && newTaskText.trim()) {
        li.firstChild.textContent = newTaskText + " ";
    }
}

function deleteCompletedTasks() {
    document.querySelectorAll(".completed").forEach(task => task.remove());
    updateTaskCount();
}

function showAllTasks() {
    let tasks = document.querySelectorAll(".task");
    let taskList = [...tasks].map(t => 
        t.innerText.replace("Mark as Done", "").replace("Edit", "").trim()
    );

    alert("All Tasks: " + (taskList.length ? taskList.join(", ") : "None"));
}

function updateTaskCount() {
    let tasks = document.querySelectorAll(".task").length;
    let completedTasks = document.querySelectorAll(".completed").length;
    let remainingTasks = tasks - completedTasks;

    document.getElementById("taskCount").innerText = 
        `Total: ${tasks}, Completed: ${completedTasks}, Remaining: ${remainingTasks}`;
}

updateTaskCount();
