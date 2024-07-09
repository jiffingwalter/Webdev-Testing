// testing with typescript : )
var numbuh = 5;
var word = 'bang';
var bool = false;
// values cannot change types
// numbuh = 'five'; does NOT work
// must initialize variables with explicit types with... 
var character;
var age;
var isLoggedIn;
// intializing arrays
var numbers = [];
numbers.push(1);
// mixed arrays/union of types
var mixed = [];
mixed.push(1);
mixed.push('hi');
// mixed.push(true); -- invalid
// functions must have their parameter types specifically defined
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(10));
// arrays are limited to whatever they are defined with initally (array of numbers must remain array of numbers, etc)
// if initialized with mixed value types, can exist as such 
// objects CANNOT have new keys added after initial creation
var object;
object = {
    string: '10',
    number: 10
};
console.log(object);
