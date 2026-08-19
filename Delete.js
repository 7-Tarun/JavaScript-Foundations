let todos = [];

function createtodo(text) {
    return {
        text: text,
        id: 1,
        completed: false,
    }
}

function addtodo(todos, newtodo) {
    return [...todos, newtodo];
}

function manager() {
    let newtodo = createtodo("Buy milk");
    todos = addtodo(todos, newtodo);
    console.log(todos);
}