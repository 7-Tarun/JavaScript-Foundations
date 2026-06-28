let input = document.querySelector("#taskInput");
let addBtn = document.querySelector("#add");
let list = document.querySelector("#lists");
let totalTask = document.querySelector("#totalTasks");
let completedTask = document.querySelector("#completedTasks");
let pendingTask = document.querySelector("#pendingTasks");
let searchInput = document.querySelector("#searchInput");

let inputList = [];
let completedCount = 0;

function renderTasks() {
    list.innerHTML = "";

    inputList.forEach(function (task) {
        let taskList = document.createElement("li");
        taskList.textContent = task;

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

        list.appendChild(taskList);

        completeBtn.addEventListener("click", function () {
            if (taskList.classList.contains("completed")) {
                return;
            }

            taskList.classList.add("completed");
            completeBtn.classList.add("comBtnUpdate");
            deleteBtn.classList.add("delBtnUpdate");
            completeBtn.textContent = "Done";

            //Task Counter
            completedCount++;
            completedTask.textContent = completedCount;
            pendingTask.textContent = inputList.length - completedCount;
        });

        deleteBtn.addEventListener("click", function () {
            if (taskList.classList.contains("completed")) {
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
}

addBtn.addEventListener("click", function () {
    let arr = input.value.trim();

    if (arr === "") {
        alert("Enter A Task!")
    }
    else if (inputList.includes(arr)) {
        alert("Task already exists!");
    }
    else {
        inputList.push(arr);
        renderTasks();

        totalTask.textContent = inputList.length;
        pendingTask.textContent = inputList.length;

        input.value = "";
    }
});

searchInput.addEventListener("input", function () {
    let value = searchInput.value.toLowerCase();
    let items = document.querySelectorAll("#lists li");

    items.forEach(items => {
        let text = items.firstChild.textContent.toLowerCase();
        if (text.includes(value)) {
            items.style.display = "flex";
        }
        else {
            items.style.display = "none";
        }
    });
});


//Keyboard Enter Support
input.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        let arr = input.value.trim();

        if (arr !== "") {
            addBtn.click();
            input.value = "";
        }
        else {
            alert("Enter A Task!");
        }
    }
});