//A Function that shows the root b of number a.  ye function a ki power b ko show karta hai.

function root(a,b=2){
    return a**b;
}

let i = root(4,4);
console.log(i);

//Explanation: If we only pass one argument it will show of squre root of passing argument because we set b = 2 by default but if we send 2 argument it will show you power b of number a.