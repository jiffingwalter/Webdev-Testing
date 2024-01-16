// javascript allows asynchronous operations, meaning an operation doesnt have to finish in its entireity before
// the program moves on to its next operation.
// usually used for I/O operations, network requests, fetching data, etc
// handled with: callbacks, promises, async and await

function func1(callback){
    setTimeout(()=> {
        console.log("Asynchronous task 1 finished...");
        callback();
    },3000);
}

function func2(){
    console.log("Synchronous task 2 finished...");
    console.log("Synchronous task 3 finished...");
    console.log("Synchronous task 4 finished...");
}

func1(func2);