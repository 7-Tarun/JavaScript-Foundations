// let num = prompt("Enter a number: ");

for(let i = 1; i <= 10; i++){
    let r = "";
    for(let s = 1; s <= 10-i; s++){
        r += " ";
    }
    for(let j = 1; j <= i; j++){
        if(i % 2 != 0){
            r += "* ";
        }
    }
    if(i%2 != 0){
        console.log(r);
    }
}