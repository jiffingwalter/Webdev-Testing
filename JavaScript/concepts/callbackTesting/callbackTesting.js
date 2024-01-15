// callback function - a function that is passed as an argument for another function
// when passing a function in arguments, do not include the parenthesis or else it will be immedietely called
// bro code explanation: "hey, when you're done with this stuff, call this function next"


// if for some reason the main function 'hello' takes a long time, the 'goodbye' function could run
    // if it was called like a normal function inside 'hello'. when specifying it as a callback function
    // (including it without parenthesis), it should always run AFTER the 'hello' operation completes, as expected

hello(goodbye);

function hello(callback){
    console.log("hello!");
    callback();
}
function goodbye(){
    console.log("goodbye!");
}