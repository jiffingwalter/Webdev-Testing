const person1 = {
    firstname: 'Jeff',
    lastname: 'Mynamis',
    age: 25,
    isEmployed: true,
    sayHello: ()=>{
        console.log('sup dawg');
    }
}

console.log(`Name: ${person1.lastname}, ${person1.firstname}`);
person1.sayHello();