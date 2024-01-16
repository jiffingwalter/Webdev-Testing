// JavaScript objects - similar to a dictionary in other languages, JS objects are key:value collections of values and functions
// must use "this" to access values inside the object like other languages
//           -- note that "this" keyword DOESNT work inside functions made using arrow functions

const person1 = {
    firstname: 'Jeff',
    lastname: 'Mynamis',
    age: 25,
    isEmployed: true,
    sayHello: function(){
        console.log(`sup dawg, ${this.lastname} ${this.firstname}`)
    }
}

// displaying information, calling an in-object function
console.log(`Name: ${person1.lastname}, ${person1.firstname}`);
person1.sayHello();

// CONSTRUCTORS ----
function User(username,password,email,age){
    this.username = username,
    this.password = password,
    this.email = email,
    this.age = age
    this.getInfo = function(){
        console.log(`New user's information made with a constructor:
        Username: ${newUser.username}
        Password: ${newUser.password}
        Email: ${newUser.email}
        Age: ${newUser.age}`);
    }
};

const newUser = new User('justoni','superSecretPassword','justin@walter.net',25);
newUser.getInfo();

// nested objects example
const person = {
    name: "Simon Douglas",
    age: 28,
    isStudent: false,
    hobbies: ["Drawing", "Writing", "Video Games"],
    address: {
        street: "123 Street St.",
        city: "London",
        country: "United Kingdom"
    }
}

console.log(`Nested object testing: Listing out ${person.name}'s file...`);
for(const property in person){ // for loop to go through each property in an object
    console.log(person[property]);
}

// arrays of objects -----
console.log('creating and modifying arrays of objects ----------------');
class Fruit{
    constructor(name,color,calories){
        this.name = name;
        this.color = color;
        this.calories = calories;
    }
}

const fruits = [new Fruit("apple","red",50),
                new Fruit("orange","orange",67),
                new Fruit("banana","yellow",62),
                new Fruit("coconut","white",93),
                new Fruit("pineapple","yellow",87)];

for(const index in fruits){ // display all elments and their object properties
    console.log(`name: ${fruits[index].name}, color: ${fruits[index].color}, calories: ${fruits[index].calories}`);
}
// filter and show only specific fruits
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowcalFruits = fruits.filter(fruit => fruit.calories <= 80);
console.log(yellowFruits);
console.log(lowcalFruits);

// reduce and show a certain fruit
const maxCals = fruits.reduce((max,fruit)=>
    fruit.calories > max.calories ? fruit : max
);
console.log(maxCals); // show the fruit with the most calories
const minCals = fruits.reduce((min,fruit)=>
    fruit.calories < min.calories ? fruit : min
);
console.log(minCals); // show the fruit with the least calories