//Sum of all the array element using arrow function.

let prices = [100,200,300,250];
let total = 0;

prices.forEach(i => {
    total += i;
});
console.log(total);