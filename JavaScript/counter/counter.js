// Counter program logic
// Initialization
const increaseButton = document.getElementById("button-increase");
const decreaseButton = document.getElementById("button-decrease");
const resetButton = document.getElementById("button-reset");
const countLabel = document.getElementById("counter-label");
const inputIncrement = document.getElementById("input-increment");
let count = 0;
let increment = 1;


// Event handling
inputIncrement.onchange = ()=> {increment = parseInt(inputIncrement.value)};

increaseButton.onclick = ()=>{
    updateCount(count+increment);
};

decreaseButton.onclick = ()=>{
    updateCount(count-increment);
};

resetButton.onclick = ()=>{
    updateCount(0);
}

// Functions
function updateCount(num){
    if(isNaN(num)){
        countLabel.textContent = 'ERROR';
    } else {
        count = num;
        countLabel.textContent = num;
    }
    adjustFontSize();
};

function adjustFontSize(){
    const container = document.getElementById("counter-container");
    const maxSize = 160;
    const availableWidth = container.clientWidth;
    let fontSize = Math.min(maxSize, availableWidth / countLabel.textContent.length);
    countLabel.style.fontSize = fontSize + "px";
}