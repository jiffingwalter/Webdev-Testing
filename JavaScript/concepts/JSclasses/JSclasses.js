// classes in javascript - 

class Product{
    constructor(name,price){
        this.name = name,
        this.price = price
    }

    displayProduct(){
        console.log(`Product name: ${this.name}`);
        console.log(`Product price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const shirt = new Product(`Shirt`,19.99);
shirt.displayProduct();
const pants = new Product(`Pants`,35.00);
pants.displayProduct();
const underwear = new Product(`Underwear`,15.50);
underwear.displayProduct();

const total = shirt.calculateTotal(salesTax);
console.log(`Total price after tax: $${total.toFixed(2)}`);

console.log(`static keyword testing ------------------------`)
// static keyword testing - defines properties and methods only accessible to the class itself,
//      rather than objects created from the class
class MathUtil{
    static PI = 3.14159;
    static getDiameter(radius){
        return radius * 2;
    }
    static getCircumference(radius){
        return 2 * this.PI * radius;
    }
    static getArea(radius){
        return this.PI * radius * radius;
    }
}

console.log(`Pi: ` + MathUtil.PI);
console.log(`Diameter: ` + MathUtil.getDiameter(10));
console.log(`Circumference: ` + MathUtil.getCircumference(10));
console.log(`Area: ` + MathUtil.getArea(10));

// user example ------
class User{
    static userCount = 0; // cant be accessed from user objects made from it

    constructor(username){
        this.username = username;
        User.userCount++;
    }
}

const user1 = new User("Jeff");
console.log(user1.username);
console.log(`User count reported from object created from User class: ${user1.userCount} -- should be undefined!`);
console.log(`User count reported directly from User class: ${User.userCount}`);

console.log(`inheritence and super keyword testing --------------------`)
// --------------------------------------------------
class Animal{
    name = '';
    age = 0;
    constructor(name, age){
        this.name = name,
        this.age = age
    };

    alive=true;
    eat(){
        console.log(`This ${this.name} is eating`)
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`)
    }
    move(speed){
        console.log(`This ${this.name} is moving at a speed of ${speed}`)
    }
}

class Rabbit extends Animal{ // creates rabbit class based on what is already set by animal superclass
    runSpeed = 0;
    constructor(name, age, runSpeed){
        super(name, age); // passes these values back to parent object for it's constructor
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} is running`);
        super.move(this.runSpeed); // passes this subclasses value to the superclass's move method
    }    
}
class Fish extends Animal{
    swimSpeed = 0;
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`This ${this.name} is swimming`);
        super.move(this.swimSpeed);
    }
}
class Hawk extends Animal{
    flySpeed = 0;
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }
    
    fly(){
        console.log(`This ${this.name} is flying`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit('Rabbit',2,12);
const fish = new Fish('Fish',1,7);
const hawk = new Hawk('Hawk',3,10);

console.log(`Is this ${rabbit.name} alive? ${rabbit.alive}`);
rabbit.eat();
rabbit.sleep();
rabbit.run();
console.log(`Is this ${fish.name} alive? ${fish.alive}`);
fish.eat();
fish.sleep();
fish.swim();
console.log(`Is this ${hawk.name} alive? ${hawk.alive}`);
hawk.eat();
hawk.sleep();
hawk.fly();

// creating getters and setters --------------------------
class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if (newWidth > 0){
            this._width = newWidth; // underscores represent private properties in JSs
        }
        else {
            console.error("Width must be a positive number");
        }
    }
    get width(){
        return this._width + `cm`;
    }
    set height(newHeight){
        if (newHeight > 0){
            this._height = newHeight;
        }
        else {
            console.error("Height must be a positive number");
        }
    }
    get height(){
        return this._height + `cm`;
    }

    get area(){
        return (this._width * this._height) + `cm^2`;
    }
}

const rectangle = new Rectangle(-1000,'this is a string'); // would be bad if there was no validation. this can be done in a setter

rectangle.width = 5;
rectangle.height = 6;
console.log(rectangle.area);

// person example
class Person{
    constructor(firstname, lastname, age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    set firstname(newFirstname){
        if(typeof newFirstname === "string" && newFirstname.length > 0){
            this._firstname = newFirstname;
        } else {
            console.error('First name must be a non-empty string');
        }
    }
    set lastname(newLastname){
        if(typeof newLastname === "string" && newLastname.length > 0){
            this._lastname = newLastname;
        } else {
            console.error('Last name must be a non-empty string');
        }
    }
    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0){
            this._age = newAge;
        } else {
            console.error('Age must be a non-negative number');
        }
    }
    get firstname(){
        return this._firstname;
    }
    get lastname(){
        return this._lastname;
    }
    get age(){
        return this._age;
    }
    get fullname(){
        return this._firstname + " " + this._lastname;
    }
}
const personBad = new Person(420,69,'get punked'); // should not work
const personGood = new Person('Simon','Douglas',28);

console.log(personGood.firstname); // note that properties are not viewable by default since they're private and there's no getter
console.log(personGood.lastname);
console.log(personGood.age);
console.log(personGood.fullname);

// testing a nested object inside a class
class PersonNested{
    constructor(name, age, ...address){
        this.name = name,
        this.age = age,
        this.address = new Address(...address);
    }
}

class Address{
    constructor(street,city,country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const personNested1 =  new PersonNested("Justin",25,"123 Street","Cityplace","USA");
const personNested2 =  new PersonNested("Justoni",52,"321 Road","PlaceCity","UK");
console.log(personNested1);
console.log(personNested2);