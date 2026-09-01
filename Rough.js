let count = 0;

const button = document.querySelector("#addBtn");
const output = document.querySelector("#count");

button.addEventListener("click", function () {

    count++;

    if (count > 10) {
        output.textContent = "Limit reached!";
        localStorage.setItem("limitReached", "true");
        return;
    }

    if (count % 2 === 0) {
        output.textContent = `${count} — Even`;
    } else {
        output.textContent = `${count} — Odd`;
    }

    localStorage.setItem("count", count);

});