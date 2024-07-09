// testing with typescript : )
let numbuh = 5;
let word = 'bang';
let bool = false;
// values cannot change types
// numbuh = 'five'; does NOT work

// must initialize variables with explicit types with... 
let character: string;
let age: number;
let isLoggedIn: boolean;

// intializing arrays
let numbers: number[] = [];
numbers.push(1);
// mixed arrays/union of types
let mixed: (string|number)[] = [];
mixed.push(1);
mixed.push('hi');
// mixed.push(true); -- invalid

// functions must have their parameter types specifically defined
const circ = (diameter:number)=>{
    return diameter * Math.PI;
};
console.log(circ(10));

// arrays are limited to whatever they are defined with initally (array of numbers must remain array of numbers, etc)
// if initialized with mixed value types, can exist as such 

// objects CANNOT have new keys added after initial creation
let object: object;
object = {
    string: '10',
    number: 10
}
console.log(object);