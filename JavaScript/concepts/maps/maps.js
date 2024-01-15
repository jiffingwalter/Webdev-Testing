//.map() - accepts a callback and applies that function to each element of an array

// numbers example
const numbers = [1,2,3,4,5,6,7,8,9];
const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(squares);
console.log(cubes);

function square(element){
    return Math.pow(element, 2);
}
function cube(element){
    return Math.pow(element, 3);
}

// date example
const dates = ['10-31-2023', '01-13-1999', '04-25-1993'];
const formattedDates = dates.map(formatDates);
console.log(formattedDates);

function formatDates(element){
    const parts = element.split('-');
    return `${parts[2]}/${parts[0]}/${parts[1]}`;
}