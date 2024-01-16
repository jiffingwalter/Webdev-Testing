// sort - sorts elements of an array in lexicographic order
// aka not alpahbetical order
// can add your own sorting comparison function in the parameters

const numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers.sort()); // doesnt work as expected since its lexicographic
console.log(numbers.sort((a,b)=> a - b)); // with a custon sort comparison function, will work as expected

// sorting different properties example
const people = [{name: "Jeff", age:25, gpa: 3.0},
                {name: "Doug", age:16, gpa: 2.0},
                {name: "Jack", age:41, gpa: 3.5},
                {name: "Greg", age:21, gpa: 3.1},
                {name: "Mike", age:32, gpa: 1.5}];

people.sort((a,b) => a.name.localeCompare(b.name));
console.log(people);
// note that sometimes the async nature of javascript may make printing multiple sorts of the same array to console act weird

// shuffling ----------------------------
// best to not use the actual shuffle() in javascript since its very inefficent
// best to use Fisher-Yates algorithm
const cards = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];

shuffle(cards);

console.log(cards);

function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));
        [array[i], array[random]] = [array[random], array[i]];
    }
}