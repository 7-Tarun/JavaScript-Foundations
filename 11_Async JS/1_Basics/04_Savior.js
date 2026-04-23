//The code works, the results are correct. So what led the industry to call this method "hell"?

console.log(`Cooking Started...`);

setTimeout(() => {
     console.log(`1. Vegetsbled are cutted`);

     setTimeout(() => {
        console.log(`2. Start cooking veggies`);

        setTimeout(() => {
         console.log(`3. Finish eating.`);
        },1000);

     },5000);

}, 1000);


//Reason and Explanation:-
// ===== WHY CALLBACK HELL IS A PROBLEM =====

// 1. Pyramid of Doom     → Nested callbacks shift code rightward, making it unreadable & unmaintainable.
// 2. Error Handling      → Each callback needs its own error check — no single try/catch can save you.
// 3. Inversion of Control → You lose control of your own code flow inside nested callbacks.

// ✅ The Savior: Promises (ES6, 2015) → Flattens the pyramid, centralizes errors, restores control.