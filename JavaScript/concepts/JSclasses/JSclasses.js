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

console.log(`------------------------`)
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

console.log(`------------------------`)
// inheritence testing -----
class Animal{
    alive=true;
    eat(){
        console.log(`This ${this.name} is eating`)
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`)
    }
}

class Rabbit extends Animal{
    name = "Rabbit";

    run(){
        console.log(`This ${this.name} is running`)
    }    
}
class Fish extends Animal{
    name = "Fish";

    swim(){
        console.log(`This ${this.name} is swimming`)
    }
}
class Hawk extends Animal{
    name = "Hawk";
    
    fly(){
        console.log(`This ${this.name} is flying`)
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

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