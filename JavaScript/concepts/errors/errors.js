// errors in javascript
// js supports try/catch/finally blocks
// note of good practice, use finally blocks to clean up stuff like closing files, connections, and release resources

try{
    console.log(thisVarDoesntExist);
} catch (error) {
    console.error(`Caught the error and progream should still run gracefully:\n${error}`);
}
console.log("End of program still reached"); // < -- doesn't get reached if error is uncaught

// user input example
try{
    const dividend = window.prompt("Enter a dividend: ");
    const divisor = window.prompt("Enter a divisor: ");

    if(divisor == 0){ // catch a case (lol) where someone would try to break a division program by inputting 0 or string values
        throw new Error("Divison by 0");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Expected a number")
    }

    const result = dividend / divisor;
    console.log(result);
} catch (error){
    console.error(error);
}
