let input = document.querySelector("#taskInput");
let addBtn = document.querySelector("#add");
let list  = document.querySelector("#lists");
let delBtn = document.querySelector(".delBtn");
let comBtn = document.querySelector(".comBtn");

addBtn.addEventListener("click", function() {
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

    let textSpan = document.createElement("Span");
    taskList.appendChild(textSpan);

    if(input.value.trim() === "") {
        alert("Enter A Task!")
    }
    else{
        list.appendChild(taskList);
        input.value = "";
    }
});