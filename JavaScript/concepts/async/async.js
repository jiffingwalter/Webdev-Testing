// javascript allows asynchronous operations, meaning an operation doesnt have to finish in its entireity before
// the program moves on to its next operation.
// usually used for I/O operations, network requests, fetching data, etc
// handled with: callbacks, promises, async and await

function func1(callback){
    setTimeout(()=> {
        console.log("Asynchronous task 1 finished...");
        callback();
    },5000);
}

function func2(){
    console.log("Synchronous task 2 finished...");
    console.log("Synchronous task 3 finished...");
    console.log("Synchronous task 4 finished...");
}

func1(func2);

// callback hell - idea in javascript of having many nested callbacks that gets hard to read
function task1(callback){
    setTimeout(()=>{
        console.log('Task one finished');
        callback();
    }, 2000);
}
function task2(callback){
    setTimeout(()=>{
        console.log('Task two finished');
        callback();
    }, 1000);
}
function task3(callback){
    setTimeout(()=>{
        console.log('Task three finished');
        callback();
    }, 3000);
}
function task4(callback){
    setTimeout(()=>{
        console.log('Task four finished');
        callback();
    }, 1500);
}

task1(()=>{ // example of callback hell. it works but its gets ugly fast
    task2(()=>{
        task3(()=>{
            task4(()=>{
                console.log('All tasks complete!');
            });
        });
    });
});

// PROMISES - objects that manage async operations. can wrap a promise object around an operation that returns
//          if the operations was successful or failed, and does something based on either case
// syntax:  new Promise((resolve, reject) => { - code to be ran - })

// chores example
function walkDog(){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            const dogWalked = true;
            if (dogWalked){
                resolve("You walk the dog");
            } else {
                reject("You DIDN'T walk the dog");
            }  
        }, 1500);
    });
}
function cleanKitchen(){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            const kitchenCleaned = true;
            if (kitchenCleaned){
                resolve("You cleaned the kitchen");
            } else {
                reject("You DIDN'T clean the kitchen");
            }  
        }, 3000);
    });
}
function takeOutTrash(){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            const trashTakenOut = true;
            if (trashTakenOut){
                resolve("You took out the trash");
            } else {
                reject("You DIDN'T take out the trash");
            }  
        }, 500);
    });
}

// entirely promise based implementation
// walkDog().then(message=>{console.log(message); return cleanKitchen()})
//          .then(message=>{console.log(message); return takeOutTrash()})
//          .then(message=>{console.log(message); console.log("You finished all the chores!")})
//          .catch(error=>console.error(error));

// ASYNC / AWAIT keywords - allows you to write synchronous code in an async fashion. does not have resolve or reject parameters
//      async = makes a function return a promise
//      await = makes an async function WAIT for a promise. everything after await is placed in queue

async function doChores(){
    console.log('Running chores with async/await implementation...');
    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("You finished all the chores!");
    } catch (error){
        console.error(error);
    }
}

doChores();