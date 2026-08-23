let count = 0; 
const button = document.querySelector("#addBtn"); 
const countElement = document.querySelector("#count"); 

function add(input){ 
    return input + 1; 
} 

function render(amount){ 
    countElement.textContent = amount; 
} 

button.addEventListener("click", function () { 
    count = add(count); 
    render(count); 
});