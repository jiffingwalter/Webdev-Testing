// event listener - listens for specific events usually triggerd by users
// helps create interactive webpages, with events such as...
//      click event - when a user clicks on something
//      mouseover event - when a user hovers over something
//      mouseout event - when a user STOPS hovering over something
//      keydown - pressing down on a key
//      keyup - after releasing a key;
// done by using .addEventListener(event, function);

const box = document.getElementById("box");
const dialog = document.getElementById("dialog");
const button = document.getElementById("button-surrender");

box.addEventListener("click", event=>{ // event parameter is provided by web browser automatically for when an event occurs
    box.textContent = "✋😔✋";
    dialog.textContent = "blah im dead";
    box.style.backgroundColor = "tomato";
});
box.addEventListener("mouseout", event=>{
    box.textContent = "👉🤠👉";
    dialog.textContent = "Stick em up, cowpoke";
    box.style.backgroundColor = "green";
});

button.addEventListener("click", event=>{
    box.textContent = "✋😎👌";
    dialog.textContent = "damn right";
    box.style.backgroundColor = "yellow";
})

// key events examples -----------------------------------------------------------

const floatingBox = document.getElementById("floatingBox");
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event=>{ // this captures any key press events. gives the key pressed and if alt or control was pressed too
    if (event.key.startsWith("Arrow")){
        
        event.preventDefault(); // stops screen from scrolling along with the moving element

        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }
        floatingBox.style.top = `${y}px`;
        floatingBox.style.left = `${x}px`;
        floatingBox.textContent = "😲";
    }
    
})
document.addEventListener("keyup", event=>{ // same as key down but triggers once the key press has let up
    floatingBox.textContent = "😉";
})