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