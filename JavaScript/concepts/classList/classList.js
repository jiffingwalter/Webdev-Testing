// classLists - element property in JS to interact with element CSS classes
//              can be used to make reusable classes for elements across a web page
//              add(), remove(), toggle(), replace(), contains()

const button = document.getElementById("button");

button.addEventListener("mouseover", event=>{
    event.target.classList.toggle("hover");
});
button.addEventListener("mouseout", event=>{
    event.target.classList.toggle("hover");
});
button.addEventListener("click", event=>{
    if (event.target.classList.contains("disabled")){
        event.target.classList.replace("disabled", "enabled");
        button.textContent = "Hello";
    } else{
        event.target.classList.replace("enabled", "disabled");
        button.textContent = "Goodbye";
    }

});