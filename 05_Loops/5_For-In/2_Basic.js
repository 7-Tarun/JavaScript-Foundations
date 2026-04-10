const student = {
    name: "Stephen",
    roll: 21,
    grade: "A"
};

for(let key in student){
    console.log(key);
    console.log(student[key]);
}

const prices = {
    apple: 30,
    banana: 10,
    mango: 25
};

for(let key in prices){
    console.log(key.toUpperCase());
    console.log(prices[key]);
}