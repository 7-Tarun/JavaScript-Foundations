const btn = document.querySelector("#dropBtn");
const bag = document.querySelector("#inventary");
const input = document.querySelector("#userInput");


btn.addEventListener("click", function () {
    const newItem = document.createElement("div");
    newItem.classList.add("dropped-item");

    if (input.value == false) {
        alert("Enter the Item First!");
        return;
    }
    else {
        //Putting the UserInput value into the newItem
        newItem.innerText = input.value;
    }

    const itemCount = bag.children.length;
    if (itemCount >= 20) {
        alert("Inventary is Full! Remove some of the Items");
    }
    else {
        bag.appendChild(newItem);
    }

    input.value = "";
});

//Using event bubbling, to remove multiple items click sensors and made website effective.
bag.addEventListener("click", function (e) {
    if (e.target.classList.contains("dropped-item")) {        //checking condition if the target which is clicked has class, remove it
        e.target.remove();
    }
});


/*
  =========================================
  💡 PRO CONCEPT: EVENT DELEGATION
  =========================================

  1. EVENT BUBBLING (The "Apple in a Bag" Concept):
     When you click a child element, the click event travels (bubbles) upwards to its parent elements. 
     Example: If you press an apple inside a bag, you are technically pressing the bag too. 
     Benefit: Instead of adding 100 click sensors to 100 items, we add just ONE sensor to the parent container.

  2. THE INFORMER (e.target):
     The parameter 'e' (Event Object) contains all the data about the click.
     'e.target' acts like a sniper—it pinpoints the EXACT element that was physically clicked inside the parent.
     This tells us exactly which item to remove without looping through the children.
*/