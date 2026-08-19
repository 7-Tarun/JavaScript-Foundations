let todos = [];

function createTodo() {
    return {
        text: "Buy Milk",
        id: 1,
        completed: false,
    }
}

function addTodo(todos,newtodo) {
    return [...todos,newtodo];
}

function manager() {
    let newtodo = createTodo();
    todos = addtodo(...todos,newtodo);
}