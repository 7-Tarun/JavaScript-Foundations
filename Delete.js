let input = document.querySelector(".input");
const btn = document.querySelector(".btn");
let list = document.querySelector(".list");

let inputlist = [];

function readinput() {
    return input.value;
}
function clean(input) {
    return input.trim();
}
function validate(input) {
    if (input === "") {
        alert("Input Field can not be NULL");
        return;
    }
    else {
        return input;
    }
}
function cratetodo(input) {
    inputlist.push({
        text: input,
        completed: false,
        id: 1,
    });
}
function renderui() {

}

//Manager Function
btn.addEventListener("click", function () {
    let rawinput = readinput();
    let cleaninput = clean(rawinput);
    let validinput = validate(cleaninput);
    let objcration = cratetodo(validinput);
    let render = renderui();
});