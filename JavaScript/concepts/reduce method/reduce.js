// .reduce() method - reduces all elements of an array to a single value using a callback function

// cart example
const prices = [4.25,8,12.75,5.99,12,15.50];
const total = prices.reduce(sum);

console.log(`Total: $` + total.toFixed(2))

function sum(accumulator,element){
    return accumulator + element;
}


// grades example
const grades = [75, 50, 80, 65, 96];
const maxGrade = grades.reduce(getMax);
const minGrade = grades.reduce(getMin);
console.log(`Highest grade: ` + maxGrade);
console.log(`Lowest grade: ` + minGrade);

function getMax(accumulator,element){
    return Math.max(accumulator,element);
}
function getMin(accumulator,element){
    return Math.min(accumulator,element);
}