const container = document.getElementById("container");
const btn = document.getElementById("btn");
const msg = document.getElementById("message");

btn.addEventListener("click", function () {
    container.style.backgroundColor = "lightgreen";
    container.firstElementChild.style.color = "purple";


    //Remove the middle child but not the button.
    let children = container.children;                  //Live collection
    let middleindex = Math.floor(children.length / 2);
    let middleChid = children[middleindex];

    //ensure ki button middle na ho
    if (middleChid !== btn) {
        container.removeChild(middleChid);
        console.log("Removed:", middleChid.tagName);
        msg.innerText = "Removed:" + middleChid.tagName;
    }

    //Disable Button If only button left.
    if (children.length <= 1) {
        btn.disable = true;
    }
});

//Explanation available in Imp_Que.txt file.