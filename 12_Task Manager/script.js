let input = document.querySelector("#taskInput");
let addBtn = document.querySelector("#add");
let list = document.querySelector("#lists");
let totalTask = document.querySelector("#totalTasks");
let completedTask = document.querySelector("#completedTasks");
let pendingTask = document.querySelector("#pendingTasks");
let searchInput = document.querySelector("#searchInput");

let inputList = [];

function renderTasks() {
    list.innerHTML = "";

    inputList.forEach(function (task) {
        let taskList = document.createElement("li");
        let span = document.createElement("span");
        span.textContent = task.text;
        taskList.appendChild(span);

        let completeBtn = document.createElement("button");
        completeBtn.textContent = task.completed ? "Done" : "Complete";
        completeBtn.classList.add("comBtn");

        completeBtn.addEventListener("click", function () {
            task.completed = !task.completed;
            renderTasks(); 
        });

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delBtn");

        deleteBtn.addEventListener("click", function () {
            inputList = inputList.filter(t => t !== task);
            renderTasks(); 
        });
        
        if (task.completed) {
            taskList.classList.add("completed");
            completeBtn.classList.add("comBtnUpdate");
            deleteBtn.classList.add("delBtnUpdate");
        }

        taskList.appendChild(completeBtn);
        taskList.appendChild(deleteBtn);
        list.appendChild(taskList);
    });

    totalTask.textContent = inputList.length;
    completedTask.textContent = inputList.filter(t => t.completed).length;
    pendingTask.textContent = inputList.length - inputList.filter(t => t.completed).length;
}

addBtn.addEventListener("click", function () {
    let arr = input.value.trim();

    if (arr === "") {
        alert("Enter A Task!");
    }

    else if (inputList.some(t => t.text === arr)) {
        alert("Task already exists!");
    }
    else {
        inputList.push({
            text: arr,
            completed: false
        });

        input.value = "";
        renderTasks();
    }
});


searchInput.addEventListener("input", function () {
    let value = searchInput.value.toLowerCase();
    let items = document.querySelectorAll("#lists li");

    items.forEach(item => {
        // Look specifically at the span where the text is stored
        let text = item.querySelector("span").textContent.toLowerCase();
        if (text.includes(value)) {
            item.style.display = "flex";
        }
        else {
            item.style.display = "none";
        }
    });
});

// KEYBOARD ENTER SUPPORT
input.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        addBtn.click();
    }
});
