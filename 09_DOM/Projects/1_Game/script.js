let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let turnO = true;
let newBtn = document.querySelector("#newbtn");
let winMsg = document.querySelector("#winmsg");
let msg = document.querySelector("#msg");

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked!");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWin();
    });
});

const checkWin = () => {
    for(let pattern of winPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                    showWinner(pos1val);
                    return; // stop after finding a winner
            }
        }
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    deableBoxes();
    if(winMsg) winMsg.classList.remove("hide");
};

const deableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const newGame = () => {
    turnO = true;
    enableBoxes();
    if(winMsg) winMsg.classList.add("hide");
    msg.innerText = "";
}

// Reset button: clear board but keep current turn
const resetBoard = () => {
    enableBoxes();
    if(winMsg) winMsg.classList.add("hide");
    msg.innerText = "";
}

newBtn.addEventListener("click", newGame);
reset.addEventListener("click", resetBoard);