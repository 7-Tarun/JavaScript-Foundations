let input = document.querySelector("#taskInput");
let addBtn = document.querySelector("#add");
let list = document.querySelector("#lists");
let totalTask = document.querySelector("#totalTasks");
let completedTask = document.querySelector("#completedTasks");
let pendingTask = document.querySelector("#pendingTasks");


let inputList = [];
let completedCount = 0;

addBtn.addEventListener("click", function () {
    let arr = input.value;

    //Li Element created and with input text content.
    let taskList = document.createElement("li");
    taskList.textContent = input.value;

    //Complete Button created in front of li.
    let completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    taskList.appendChild(completeBtn);
    completeBtn.classList.add("comBtn");

    //Delete Button created in front of li.
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    taskList.appendChild(deleteBtn);
    deleteBtn.classList.add("delBtn");

    if (input.value.trim() === "") {
        alert("Enter A Task!")
    }
    else {
        list.appendChild(taskList);
        inputList.push(arr);
        totalTask.textContent = inputList.length;

        //Task Counter
        pendingTask.textContent = inputList.length;

        input.value = "";
    }

    completeBtn.addEventListener("click", function () {
        taskList.classList.add("completed");
        completeBtn.classList.add("comBtnUpdate");
        deleteBtn.classList.add("delBtnUpdate");
        completeBtn.textContent = "Done";

        //Task Counter
        completedCount++;
        if(taskList.classList.contains("completed")){
            completedTask.textContent = completedCount;
            pendingTask.textContent = inputList.length - completedCount;
        }
    });

    deleteBtn.addEventListener("click", function () {
        if(taskList.classList.contains("completed")){
            completedCount--;
            completedTask.textContent = completedCount;
            pendingTask.textContent = inputList.length - completedCount;
        }

        //Task Counter
        inputList.length = inputList.length - 1;
        totalTask.textContent = inputList.length;
        pendingTask.textContent = inputList.length - completedCount;

        taskList.remove();
    });
});