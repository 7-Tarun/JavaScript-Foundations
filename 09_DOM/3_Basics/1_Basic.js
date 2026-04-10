let p = document.getElementById("mypara");
let btn = document.getElementById("style");
let btn2 = document.getElementById("style2");
let btn3 = document.getElementById("style3");

btn.addEventListener("click", function () {            //Making changes through css.
    p.classList.add("heighlight");
    h1.classList.add("heighlight2");
});
btn3.addEventListener("click", function () {
    p.classList.remove("heighlight");
    h1.classList.remove("heighlight2");
});
btn2.addEventListener("click", function () {
    p.classList.toggle("heighlight");           //It work like a toggle, agar highlight class already hai to remove karega agar nahi hai to add karega. page ko refresh karne ki jarurat nahi.
    h1.classList.toggle("heighlight2");
});



// Key Methods:-
// classlist.add("className")   ->      class sirf add karega remove nahi
// classlist.remove("className")   ->      class sirf remove karega add nahi
// classlist.toggle("className")   ->      ak hi button dono karega.