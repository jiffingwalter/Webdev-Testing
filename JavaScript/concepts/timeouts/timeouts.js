// timeouts - javascript methods that allow certain actions to happen after certain amounts of time
// not good for precise time calculations since they're estimations

// basic timeout example: changes a div element after about 3 seconds
const timeoutObj = setTimeout(()=>{document.getElementById("div").innerText = "Hello, didn't see you there!"},3000);

// clear timeout example
const timeoutObj2 = setTimeout(()=>{document.getElementById("div").innerText = "This message should not appear"},5000);
clearTimeout(timeoutObj2);

// html controlled example
let timeoutId;

function startTimer(){
    timeoutId = setTimeout(()=> window.alert("Timer succeeded!"),2500);
    console.log("STARTED");
}
function clearTimer(){
    clearTimeout(timeoutId);
    console.log("CLEARED");
}