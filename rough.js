let todos = [];

function createTodo(text) {
    return {
        text: text,
        id: Date.now(),
        completed: false
    };
}

// 2. Pure function - old array mutate nahi karta, new array return karta hai
function addTodo(todos, todo) {
    return [...todos, todo];
}

// 3. Manager function - state ko handle karta hai
function handleAddTodo(input) {
    const newTodo = createTodo(input);       // step 1: object bana
    todos = addTodo(todos, newTodo);          // step 2: array update kar
}

// Usage:
handleAddTodo("Buy Milk");
handleAddTodo("Go to gym");

console.log(todos);