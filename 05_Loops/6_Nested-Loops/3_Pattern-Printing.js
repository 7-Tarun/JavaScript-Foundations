// let num = prompt("Enter a number: ");

for(let i = 1; i <= 5; i++){
    let row = "";
    for(let j = 1; j <= i; j++){
        row += "*";
    }
    console.log(row);
}

//Working:-
/* Pahale loop starting se chala i ki value 1 hai pahale loop condition true hone ke baad uske andar gaya or dusra loop chalu hua, 2nd loop ne condition check kiya kya j means ki value(i.e-1) i(i.e-1) se choti ya uske barabar hai condition true hui loop apne adar gaya or row ke andar "*" add kar diya abhi 2nd loop khatam nahi hua, loop wapis chala or j ki value 2 ho gayi condition wapis check hui kya j ki value(i.e-2) i(i.e-1) se choti ya uske barabar hai condition false loop break and then console.log chala or usne row ke andar jo tha vo print kiya that is "*" or ab yahi process repeat hoga jab tak 1st loop ki condition false nahi ho jati. */