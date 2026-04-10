let p = document.getElementById("mypara");          //Accessing paragraph through id.
let link = document.getElementById("mylink");       //Accessing link through id.
let button1 = document.getElementById("btn1");      //Accessing button through id.
let heading = document.getElementById("h1");        //Accessing heading through id.

button1.addEventListener("click",function(){            //Button ko press karne par kin kin chizeon me changes honge?
    //Changing paragraph text.
    p.innerText = "Text has been update dynamically";
    //Adding html in paragraph.
    p.innerHTML += "<b>This text is bold</b>";
    //Adding some style.
    p.style.color = "white";
    p.style.backgroundColor = "darkblue";
    //Adding some style in h1.
    h1.style.backgroundColor = "Black";
    h1.style.color = "white";
    //Link ko update karna.
    link.setAttribute("href","https://www.google.com");
    link.innerText = "Google";
});