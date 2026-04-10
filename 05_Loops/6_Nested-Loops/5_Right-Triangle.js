// r indicate row and s indicate space.

for (let i = 1; i <= 5; i++){
    let r = "";
    for(let s = 1; s <= 5-i; s++){
        r += " ";
    }
    for(let j =  1; j <= i; j++){
        r += "*"
    }
    console.log(r);
}

// to understand how compiler read the nested loop code go and check "Pattern-Printing" file.