let count = 0;      //state

const button = document.querySelector("#addBtn");
const output = document.querySelector("#count");

button.addEventListener("click", function () {
    
});


// USER ACTION
//     ↓
// Event Listener
//     ↓
// Manager
//     ↓
// incrementCount(count)     ← Pure
//     ↓
// newCount
//     ↓
// count = newCount          ← State update
//     ↓
// checkLimit(count)         ← Pure
//     ↓
// isEven(count)             ← Pure
//     ↓
// saveCount(count)          ← Side effect
//     ↓
// renderUI(count, ...)      ← Side effect