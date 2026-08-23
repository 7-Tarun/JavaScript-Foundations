let logHistory = [];

//pure function no side effects
function  calculatetotal(order){
    return order.total * 1.18;
}

//Functions with Side effects

function logorder(){
    console.log("Processing: ", order);
}

function addtodo(order){
    logHistory.push(order);
}

function timestamp(order){
    order.timestamp = Date.now();
}

function createLocalStorage(order){
    localStorage.setItem("lastOrder", JSON.stringify(order));
}

function managerFunction(){

}

const myOrder = { item: "Laptop",total: 50000 };
const finalAmount = processOrder(myOrder);
console.log("Final Amount:",finalAmount);

//How many side effects? ->