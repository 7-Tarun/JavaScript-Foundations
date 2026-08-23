let count = 0;

const button = document.querySelector("#addBtn");
const countElement = document.querySelector("#count");

function incrementCount(currentCount) {
    return currentCount+1;
}

function renderUI(count) {
    countElement.textContent = count;
}

button.addEventListener("click", function () {
    count = incrementCount(count);
    renderUI(count);
});