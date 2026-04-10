//Formula of generating random number:  Math.random()+Math.floor()
// Math.random()- O aur 1 ke beech se randim number deta hai. Like-0.37,0.29.
// Math.floor()- Number ko roundfigure me karta hai. Like- 3.9 ko 3.

let num = Math.random()*5;      //Giving random number between 0-5.
console.log(num);              

let index = Math.floor(Math.random()*5);    //Giving random number but in round figure.
console.log(index);