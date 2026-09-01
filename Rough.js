let count = 0;

const button = document.querySelector("#addBtn");
const output = document.querySelector("#count");

button.addEventListener("click", manager);

function manager() {
    const newCount = incrementCount(count);
    
    updateState(newCount);
    
    const isLimitReached = checkLimit(count);
    const isCountEven = isEven(count);
    
    saveCount(count);
    renderUi(count, isLimitReached, isCountEven);
}

function incrementCount(currentCount) {
    return currentCount + 1;
}

function checkLimit(currentCount) {
    return currentCount >= 10;
}

function isEven(currentCount) {
    return currentCount % 2 === 0;
}

function updateState(newCount) {
    count = newCount;
}

function saveCount(currentCount) {
    localStorage.setItem("savedCount", currentCount);
}

function renderUi(currentCount, isLimit, isEvenNo) {
    if (isLimit) {
        output.textContent = `Maximum Limit Reached (${currentCount})`;
        return;
    }
    
    if (isEvenNo) {
        output.textContent = `${currentCount} — Even`;
    } else {
        output.textContent = `${currentCount} — Odd`;
    }
}
