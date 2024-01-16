// destructuring - extracting values from arrays and objects and assigning them to objects

// swapping values example

let a = "value one";
let b = "value two";

[a,b] = [b,a];

console.log(a);
console.log(b);

// swapping array elements example
let colors = ["red", "green","blue","yellow","black","white"];
console.log(`Original array: ` + colors);
[colors[0],colors[colors.length-1]] = [colors[colors.length-1],colors[0]];
console.log(`Swapped array: ` + colors);

// assigning array elements to variables
colors = ["red", "green","blue","yellow","black","white"];
const [firstColor,secondColor,thirdColor, ...extraColors] = colors;
// note that the ... rest operator puts the rest of the colors into an array inside a new array, extraColors 
console.log(`Original array: ` + colors);
console.log(`Variables made from array:\n${firstColor}\n${secondColor}\n${thirdColor}\n${extraColors}`);

// extracting values from objects
const person1 = {
    name: 'Simon Douglas',
    age: 28,
    job: 'Fry cook'
}

const person2 = {
    name: 'Cassidy White',
    age: 27,
}

function displayPerson(person){
    name = person.name;
    age = person.age;
    job = person.job?person.job:"Unemployed";
    console.log(`Person variables:\n${name}\n${age}\n${job}`);
};

displayPerson(person1);
displayPerson(person2);