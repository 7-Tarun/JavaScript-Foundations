for(let i = 1; i <= 5; i++){
    let row = "";
    for(let s = 1; s <= 5-i; s++){
        row += " ";
    }
    for(let j = 1; j <= i; j++){
        row += "* ";
    }
    console.log(row);
}

// Code is same as Right-Triangle.js just need a space to make a piramid. 
// row += "* "  [space added after:*].