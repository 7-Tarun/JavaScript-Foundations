//Todo web app but with better structure and mindset.

let input = document.querySelector(".input");
const btn = document.querySelector(".btn");
let list = document.querySelector(".list");

let inputlist = [];
btn.addEventListener("click", manager);

//Manager Function
function manager() {
    let rawinput = readinput();
    let cleaninput = clean(rawinput);
    let validinput = validate(cleaninput);
    let newtodo = cratetodo(validinput);
    inputlist = addtodo(inputlist,newtodo);
    renderui();
    input.value = "";
}

function readinput() {      //Impure Function
    return input.value;
}

function clean(input) {     //Pure Function
    return input.trim();
}

function validate(input) {      //Pure Function
    if (input === "") {
        alert("Input Field can not be NULL");
        exit;
    }
    else {
        return input;
    }
}

function cratetodo(input) {     //Pure Function
    if (inputlist.some(t => t.text === input)) {
        alert("Task already exists!");
    }
    else {
        return {
            text: input,
            completed: false,
            id: 1,
        }
    }
}

function addtodo(inputlist,newtodo){        //Pure Function
    return [...inputlist, newtodo];
}

function renderui() {           //Impure Function
    list.innerHTML = "";
    inputlist.forEach(function (task) {
        let taskList = document.createElement("li");
        let span = document.createElement("span");
        span.textContent = task.text;
        taskList.appendChild(span);
        list.appendChild(taskList);
    });
}

//Keyboard Enter Support
input.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        btn.click();
    }
});