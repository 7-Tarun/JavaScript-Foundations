let p = document.getElementById("mypara");      //ID Element ko access karna.
console.log(p.innerText);                       //Content ko print karega console me.

let button1 = document.getElementById("btn1");
// When you click the button the content of the paragraph will be changed (Note: p is already accessed on the top of the code).
button1.addEventListener("click", function(){
    p.innerText = "The Text has been changed successfully.";
});


let button2 = document.getElementById("btn2");
//When You click the button paragraph style has beeen changed (Note: p is already accessed on the top of the code).
button2.addEventListener("click",function(){
    p.style.color = "red";
    p.style.fontSize = "20px";
    p.style.backgroundColor = "skyblue";
    p.style.fontweight = "bold";
});