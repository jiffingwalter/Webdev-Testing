// function expressions - defining functions as values and or variables

// simple example - no delay
const hello = ()=>{
    console.log('Hello - simple example')
    console.log('Hello function has run');
}
hello();

// timeout example - with function expression written inside the parameters
setTimeout(()=>{
    console.log('Hello - delayed example');
    console.log('Delayed hello callback function has run')
},3000);

// squared numbers example with func expressions
const numbers = [1,2,3,4,5,6];
const squares = numbers.map((element)=>{
    return Math.pow(element,2);
});
const cubes = numbers.map((element)=>{
    return Math.pow(element,3);
})

console.log(`Sqaures example: ` + squares);
console.log(`Cubed example: ` + cubes);

// even and odd numbers example with func expressions
const evenNums = numbers.filter((element)=>{
    return element % 2 === 0;
});
console.log(`Even example: ` + evenNums);
const oddNums = numbers.filter((element)=>{
    return element % 2 !== 0;
});
console.log(`Odd example: ` + oddNums);
const total = numbers.reduce((accumulator,element)=>{
    return accumulator + element;
});
console.log(`Total example: ` + total);