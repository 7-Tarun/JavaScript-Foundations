//Solve This- Guess the Out Put?

console.log(`1. This is the 1st Console`);

setTimeout(() => {
    console.log(`2. This is the 2nd Console`);
}, 0);

console.log(`3. This is the 3rd Console`);

//Explanation:
//Until JavaScript's main engine (known as the Call Stack) completely finishes and clears all its synchronous code, no background (Async) work can come onto the main thread.