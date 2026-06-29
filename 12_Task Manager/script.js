let input = document.querySelector("#taskInput");
let addBtn = document.querySelector("#add");
let list = document.querySelector("#lists");
let totalTask = document.querySelector("#totalTasks");
let completedTask = document.querySelector("#completedTasks");
let pendingTask = document.querySelector("#pendingTasks");
let searchInput = document.querySelector("#searchInput");

//Single Source of truth
let inputList = [];

function loadTasks() {
    //localStorage.getItem("tasks"); -> Browser se saved data nikalta hai string(text) form me.
    let savedData = localStorage.getItem("tasks");
    if (savedData) {        //if data is found
        //then covert the string(text) into an array and put it into the inputList
        inputList = JSON.parse(savedData);
    }
    //Rendering UI to show the saved list
    renderTasks();
}

function saveTasks() {
    //Browser only understand string(text). JSON Stringfy convert inputList into string.
    //setItem("key",value) -> browser me task nam ke variable me data store karta hai.
    localStorage.setItem("tasks", JSON.stringify(inputList));
}

function renderTasks() {
    list.innerHTML = "";

    inputList.forEach(function (task) {
        let taskList = document.createElement("li");
        let span = document.createElement("span");
        span.textContent = task.text;

        //Complete Button Created
        let completeBtn = document.createElement("button");
        completeBtn.textContent = task.completed ? "Done" : "Complete";
        completeBtn.classList.add("comBtn");

        //This function only work when the user click on Complete Button.
        completeBtn.addEventListener("click", function () {
            task.completed = !task.completed;       //completed = false, became true.
            renderTasks();                          //Rerender the function to display the changes
        });

        //Delete Button Created
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delBtn");

        deleteBtn.addEventListener("click", function () {
            inputList = inputList.filter(t => t !== task);      //On click, remove the selected task from the list and re-render tasks.
            renderTasks();
        });
        
        //Condition check, this if block only works when the specific value of completed is true. 
        if (task.completed) {
            taskList.classList.add("completed");
            completeBtn.classList.add("comBtnUpdate");
            deleteBtn.classList.add("delBtnUpdate");
        }

        taskList.appendChild(span);
        taskList.appendChild(completeBtn);
        taskList.appendChild(deleteBtn);
        list.appendChild(taskList);
    });

    totalTask.textContent = inputList.length;
    completedTask.textContent = inputList.filter(t => t.completed).length;
    pendingTask.textContent = inputList.length - inputList.filter(t => t.completed).length;
    saveTasks();
}

addBtn.addEventListener("click", function () {  //Program start from here
    let arr = input.value.trim();

    if (arr === "") {
        alert("Enter A Task!");
    }

    else if (inputList.some(t => t.text === arr)) {
        alert("Task already exists!");
    }
    else {
        inputList.push({        //Passing Object, completed is false
            text: arr,
            completed: false
        });

        input.value = "";
        renderTasks();      //Calling Function
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

//// Triggered at the very bottom to ensure all variables, DOM elements, and functions are fully initialized before the script attempts to load and render data.
loadTasks();