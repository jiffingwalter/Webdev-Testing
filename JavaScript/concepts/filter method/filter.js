// .filter() method - creates new array after filtering out specified elements

// even and odd example
let numbers =[1,2,3,4,5,6,7,8];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(`Even nums: ` + evenNums);
console.log(`Odd nums: ` + oddNums);

function isEven(element){
    return element % 2 === 0;
}
function isOdd(element){
    return element % 2 !== 0;
}

// ages example
const ages = [12,5,18,21,50,8];
const adults = ages.filter(isAdult);
const children = ages.filter(isChild);
console.log(`Adults in array: ` + adults);
console.log(`Children in array: ` + children);

function isAdult(element){
    return element >= 18;
}
function isChild(element){
    return element < 18;
}