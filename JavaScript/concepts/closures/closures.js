// closures - functions defined inside of another function.
//            inner function has access to variables and scope of outer function.
//            allows for private cariables and state maintenance
//            used a lot in react, vue, and angular

function outer(){
    let message = "Hello";

    function inner(){
        console.log(message); // we can access the message variable from here
    }

    inner(); // this can be ran here
}
outer(); // this can be ran here

// incrementation example ------
function createCounter(){
    let count = 0;

    function increment(){
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getCount(){
        return count;
    }
    return {increment, getCount}; // must return function references so that they're accessible outside main function
}
const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.log(counter.count); // undefined since its private inside the function
console.log(counter.getCount()); // accessible by an inner function

// GAME EXAMPLE --------------
function initalizeGame(){
    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);
    }
    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`);
    }
    function getScore(){
        return score;
    }

    return {increaseScore,decreaseScore,getScore};
}

const game = initalizeGame();

game.increaseScore(3);
game.increaseScore(5);
game.decreaseScore(2);
game.increaseScore(6);
console.log(`Final score: ${game.getScore()}pts`);