for(let i = 1; i <= 10; i++){
    let r = "";
    for(let s = 7; s >= 10-i; s--){             //We put 7 to remove the space.
        r += " ";
    }
    for(let j = 10; j >= i; j--){
        if(i % 2 == 0){
            r += "* ";
        }
    }
    if(i % 2 == 0){
        console.log(r);
    }
}