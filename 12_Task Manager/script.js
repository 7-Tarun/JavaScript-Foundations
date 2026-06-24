let input = document.querySelector("#taskInput");
let addBtn = document.querySelector("#add");
let list = document.querySelector("#lists");

addBtn.addEventListener("click", function () {
    //Li Element created and with input text content.
    let taskList = document.createElement("li");
    taskList.textContent = input.value;

    //Delete Button created in front of li.
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
        input.value = "";
    }

    let total = list.children.length;
    console.log("Total List: ",total);

    completeBtn.addEventListener("click",function (){
        taskList.classList.add("completed");
        completeBtn.classList.add("comBtnUpdate");
        deleteBtn.classList.add("delBtnUpdate");
        completeBtn.textContent = "Done";
    });

    deleteBtn.addEventListener("click", function () {
        taskList.remove();
        total--;
        console.log("Deleted: ",total);
    });
});