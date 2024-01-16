// calculator logic
const screen = document.getElementById("screen");
const operators = ['*','/','+','-'];
let didCalculation = true; // to check if a calculation was ran and clear screen if new input is not an operator

function append(input){
    // if we did a calculation and the incoming character is NOT an operator, clear the screen for new input
    if (didCalculation && operators.includes(input)){
        clearScreen();
    } else if (didCalculation){ // otherwise, if we did a calc, set it to false so we can append the operator to the previous result
        didCalculation = false;
    }
    screen.value += input;
}

function clearScreen(){
    screen.value = "";
    didCalculation = false;
}

function calculate(){
    try{
        screen.value = eval(screen.value);
        didCalculation = true;
    } catch (error){
        screen.value = "ERROR";
        console.error(error);
    }
}