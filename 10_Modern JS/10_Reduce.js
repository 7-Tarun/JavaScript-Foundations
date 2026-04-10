//Reduce pure array ko single value bana deta hai.

// You have an array of coins [12, 8, 10, 14]. The reducer starts with an empty acc (accumulator). It picks up each element and adds it to the curr thay is already in the array. In the end, you get just one number: 44.

//acc = Accumulator
//curr = Current Value

const coins = [12,8,10,14];

const total = coins.reduce((acc,curr) =>{
    return acc+curr;
},0);       //This 0 set the default vaslue of accumulator, increase it like 2 and then you get 46.

console.log(total);