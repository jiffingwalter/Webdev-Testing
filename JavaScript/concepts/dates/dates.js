// date objects in javascript

// prints current timestamp
const date = new Date();
console.log(date);

// prints current timestamp in epoch time
const dateEpoch = Date.now();
console.log("Epoch time: " + dateEpoch);

// getting specific times
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const dayOfWeek = date.getDay();
console.log("Getting specific times from the date: ")
console.log(`Day of the week: ${dayOfWeek}\nYear: ${year}\nMonth: ${month}\nDay: ${day}\nHour: ${hours}\nMinutes: ${minutes}\nSeconds: ${seconds}`);

// comparing dates
const dateNewYears = new Date("2023-12-31");
const date2 = new Date();

function checkNewYears(){
    if(date2 > dateNewYears){
        console.log("It's after December 31st 2023! Happy 2024!");
    } else {
        console.log("It's not 2024 yet!");
    }
}
checkNewYears();