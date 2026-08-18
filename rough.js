let score = 0;
function updatescore(action) {
    score = score+action;
    console.log(score);
}
function addPoint() {
    updatescore(1);
    console.log(score);
}
function resetScore() {
    updatescore(0);
}
addPoint();
addPoint();
resetScore();
addPoint();
console.log("Final Score:", score);